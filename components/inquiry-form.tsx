'use client';
import { useEffect, useState, type FormEvent } from 'react';
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
  const [service, setService] = useState('');
  const [intent, setIntent] = useState('quote');
  const [draft, setDraft] = useState<{ body: string; href: string } | null>(
    null,
  );
  const [copyStatus, setCopyStatus] = useState('');
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const selected = query.get('service');
    const purpose = query.get('intent');
    if (services.some((s) => s.key === selected)) setService(selected!);
    if (purpose === 'inspection') {
      setIntent('inspection');
      if (!selected) setService('special-inspection');
    }
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
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title =
      services.find((s) => s.key === service)?.short ||
      'General project inquiry';
    const body = `Hello WellDone Inspection,\n\nI would like to ${intent === 'inspection' ? 'request an inspection' : 'request a quote'}.\n\nService: ${title}\nName: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\nPhone: ${String(data.get('phone') || 'Not provided').trim()}\nProject address: ${String(data.get('address')).trim()}\n\nProject details:\n${String(data.get('details') || 'Please contact me to discuss.').trim()}\n\nThank you.`;
    setCopyStatus('');
    setDraft({
      body,
      href: `mailto:welldoneinspect@gmail.com?subject=${encodeURIComponent(`${intent === 'inspection' ? 'Inspection request' : 'Quote request'} — ${title}`)}&body=${encodeURIComponent(body)}`,
    });
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
        Prepare your inquiry here, then review and send it from your email app.
        Or call us directly.
      </p>
      <form
        onSubmit={prepare}
        onChange={() => {
          setDraft(null);
          setCopyStatus('');
        }}
      >
        <div className="form-grid">
          <label>
            Your name <span>*</span>
            <Input
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
              maxLength={100}
            />
          </label>
          <label>
            Email address <span>*</span>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              maxLength={160}
            />
          </label>
        </div>
        <label>
          Phone number
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            maxLength={40}
          />
        </label>
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
              {s.short}
            </NativeSelectOption>
          ))}
          <NativeSelectOption value="other">
            Not sure — let’s discuss
          </NativeSelectOption>
        </NativeSelect>
        <label>
          Project address <span>*</span>
          <Input
            name="address"
            autoComplete="street-address"
            placeholder="Street address and borough"
            required
            maxLength={250}
          />
        </label>
        <label>
          Tell us about your project
          <Textarea
            name="details"
            placeholder="Work scope, areas of concern, preferred timing, or questions…"
            maxLength={1800}
            rows={5}
          />
        </label>
        <Button type="submit" className="form-submit">
          Prepare email inquiry <ArrowUpRight size={18} />
        </Button>
        <p className="form-note">
          Your details stay in this form until you choose to send the email.{' '}
          <a href="/privacy">Privacy</a>
        </p>
      </form>
      {draft && (
        <div className="draft-result" aria-live="polite">
          <h3>Your email draft is ready.</h3>
          <p>
            Open your email app, review the details, and send to our team. Your
            inquiry has not been sent yet.
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
          <p role="status">{copyStatus}</p>
          <details>
            <summary>View email draft</summary>
            <pre>{draft.body}</pre>
          </details>
        </div>
      )}
    </div>
  );
}
