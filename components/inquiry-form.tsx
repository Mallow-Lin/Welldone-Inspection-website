'use client';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, Copy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { services } from '@/lib/services';

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

type ModelContext = {
  registerTool: (
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: object;
      execute: (input: unknown) => unknown;
    },
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};

export function InquiryForm() {
  const searchParams = useSearchParams();
  const intent =
    searchParams.get('intent') === 'inspection' ? 'inspection' : 'quote';
  const requestedService = searchParams.get('service');
  const initialService = services.some(
    (service) => service.key === requestedService,
  )
    ? requestedService!
    : intent === 'inspection'
      ? 'special-inspection'
      : '';

  return (
    <InquiryFormFields
      key={`${initialService}:${intent}`}
      initialService={initialService}
      intent={intent}
    />
  );
}

function InquiryFormFields({
  initialService,
  intent,
}: {
  initialService: string;
  intent: 'quote' | 'inspection';
}) {
  const [service, setService] = useState(initialService);
  const [draft, setDraft] = useState<{ body: string; href: string } | null>(
    null,
  );
  const [copyStatus, setCopyStatus] = useState('');
  const [formError, setFormError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'sent' | 'fallback'
  >('idle');
  const formStartedAt = useRef(0);
  useEffect(() => {
    formStartedAt.current = Date.now();
    const context = (document as Document & { modelContext?: ModelContext })
      .modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const tool = {
      name: 'configure_inquiry_service',
      title: 'Choose an inquiry service',
      description:
        'Choose the service on the visible inquiry form. This only prepares the form; it does not send an email, book an inspection, or submit personal information.',
      inputSchema: {
        type: 'object',
        properties: {
          service: { type: 'string', enum: services.map((s) => s.key) },
        },
        required: ['service'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: (input: unknown) => {
        if (
          !input ||
          typeof input !== 'object' ||
          Object.keys(input).length !== 1 ||
          !('service' in input) ||
          !services.some((s) => s.key === input.service)
        )
          throw new Error('Select a supported service.');
        const value = input.service as string;
        flushSync(() => {
          setService(value);
          setDraft(null);
        });
        return { service: value, status: 'form_prepared', submitted: false };
      },
    };
    try {
      void Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => {});
    } catch {}
    return () => lifecycle.abort();
  }, []);
  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string, fallback = '') => {
      const value = data.get(name);
      return typeof value === 'string' ? value.trim() || fallback : fallback;
    };
    if (!field('name') || !field('email') || !field('address')) {
      setDraft(null);
      setFormError('Please enter your name, email, and project address.');
      return;
    }
    setFormError('');
    setSubmitStatus('sending');
    const title =
      services.find((s) => s.key === service)?.short ||
      'General project inquiry';
    const body = `Hello Welldone Inspection,\n\nI would like to ${intent === 'inspection' ? 'request an inspection' : 'request a quote'}.\n\nService: ${title}\nName: ${field('name')}\nCompany: ${field('company', 'Not provided')}\nEmail: ${field('email')}\nPhone: ${field('phone', 'Not provided')}\nProject address: ${field('address')}\n\nProject details:\n${field('details', 'Please contact me to discuss.')}\n\nThank you.`;
    const emailDraft = {
      body,
      href: `mailto:welldoneinspect@gmail.com?subject=${encodeURIComponent(`${intent === 'inspection' ? 'Inspection request' : 'Quote request'} — ${title}`)}&body=${encodeURIComponent(body)}`,
    };
    setCopyStatus('');
    setDraft(emailDraft);

    const website = field('website');
    const completionTime = Date.now() - formStartedAt.current;
    if (website || !formStartedAt.current || completionTime < 1_500) {
      setSubmitStatus('sent');
      return;
    }

    if (!services.some((item) => item.key === service) && service !== 'other') {
      setFormError('Please select a valid service.');
      setSubmitStatus('idle');
      return;
    }

    const { serviceId, templateId, publicKey } = emailJsConfig;
    if (!serviceId || !templateId || !publicKey) {
      setFormError(
        'Online submission is temporarily unavailable. Please use the prepared email option below.',
      );
      setSubmitStatus('fallback');
      return;
    }

    const source = `${window.location.pathname}${window.location.search}`;
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: field('name'),
          email: field('email'),
          phone: field('phone', 'Not provided'),
          message: `${body}\n\nSource page: ${source}`,
          company: field('company', 'Not provided'),
          service: title,
          address: field('address'),
          details: field('details', 'Not provided'),
          source,
        },
        {
          publicKey,
          blockHeadless: true,
          limitRate: {
            id: 'welldone-contact-form',
            throttle: 10_000,
          },
        },
      );
      setSubmitStatus('sent');
    } catch {
      setFormError(
        'We could not send your request online. Please use the prepared email option below.',
      );
      setSubmitStatus('fallback');
    }
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopyStatus(
        'Copied. Paste the inquiry into an email to welldoneinspect@gmail.com.',
      );
    } catch {
      setCopyStatus(
        'Copy is unavailable. Select the draft text below to copy it manually.',
      );
    }
  }
  return (
    <div className="inquiry-panel">
      <p className="eyebrow dark">PROJECT INQUIRY</p>
      <h2>
        {intent === 'inspection'
          ? 'Request an inspection'
          : 'Get a project quote'}
      </h2>
      <p className="form-explanation">
        Share your project information and we’ll review your request.
      </p>
      <form
        onSubmit={submit}
        aria-busy={submitStatus === 'sending'}
        onChange={() => {
          setDraft(null);
          setCopyStatus('');
          setFormError('');
          setSubmitStatus('idle');
        }}
      >
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="inquiry-website">Website</label>
          <input
            id="inquiry-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-grid">
          <label htmlFor="inquiry-name">
            Your name <span>*</span>
            <Input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
              maxLength={100}
            />
          </label>
          <label htmlFor="inquiry-company">
            Company
            <Input
              id="inquiry-company"
              name="company"
              autoComplete="organization"
              placeholder="Company or organization"
              maxLength={120}
            />
          </label>
        </div>
        <div className="form-grid">
          <label htmlFor="inquiry-phone">
            Phone number
            <Input
              id="inquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Optional"
              maxLength={40}
            />
          </label>
          <label htmlFor="inquiry-email">
            Email address <span>*</span>
            <Input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              maxLength={160}
            />
          </label>
        </div>
        <label htmlFor="service">
          Service needed <span>*</span>
        </label>
        <NativeSelect
          id="service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <NativeSelectOption value="" disabled>
            Select a service
          </NativeSelectOption>
          {services.map((s) => (
            <NativeSelectOption key={s.key} value={s.key}>
              {s.formLabel}
            </NativeSelectOption>
          ))}
          <NativeSelectOption value="other">Other</NativeSelectOption>
        </NativeSelect>
        <label htmlFor="inquiry-address">
          Project address <span>*</span>
          <Input
            id="inquiry-address"
            name="address"
            autoComplete="street-address"
            placeholder="Street address and borough"
            required
            maxLength={250}
          />
        </label>
        <label htmlFor="inquiry-details">
          Project description
          <Textarea
            id="inquiry-details"
            name="details"
            placeholder="Work scope, areas of concern, preferred timing, or questions…"
            maxLength={1800}
            rows={5}
          />
        </label>
        <p className="form-error" id="inquiry-error" role="alert">
          {formError}
        </p>
        <Button
          type="submit"
          className="form-submit"
          disabled={submitStatus === 'sending'}
        >
          {submitStatus === 'sending'
            ? 'Sending…'
            : intent === 'inspection'
              ? 'Request an inspection'
              : 'Get a quote'}{' '}
          <ArrowUpRight size={18} />
        </Button>
        <p className="form-note">
          Do not include sensitive personal records.{' '}
          <Link href="/privacy">Privacy information</Link>
        </p>
      </form>
      {submitStatus === 'sent' && (
        <div className="draft-result form-success" aria-live="polite">
          <h3>Your request has been sent.</h3>
          <p>
            Thank you. Welldone will review the project details and follow up
            using the contact information provided.
          </p>
        </div>
      )}
      {draft && submitStatus === 'fallback' && (
        <div className="draft-result" aria-live="polite">
          <h3>Complete your request by email.</h3>
          <p>
            Review the prepared project details, then send them to our team from
            your email app.
          </p>
          <a className="action primary" href={draft.href}>
            <Mail size={17} />
            Open email app
            <ArrowUpRight size={17} />
          </a>
          <Button variant="outline" onClick={copy}>
            <Copy size={16} />
            Copy inquiry
          </Button>
          <output className="copy-status">{copyStatus}</output>
          <details>
            <summary>View email draft</summary>
            <pre>{draft.body}</pre>
          </details>
        </div>
      )}
    </div>
  );
}
