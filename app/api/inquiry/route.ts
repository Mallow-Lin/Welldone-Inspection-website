import { NextResponse } from 'next/server';
import { services } from '@/lib/services';

const limits = {
  name: 100,
  company: 120,
  email: 160,
  phone: 40,
  address: 250,
  details: 1800,
} as const;

type Inquiry = {
  intent?: unknown;
  service?: unknown;
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  details?: unknown;
  website?: unknown;
};

function clean(value: unknown, limit: number) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

export async function POST(request: Request) {
  let input: Inquiry;
  try {
    input = (await request.json()) as Inquiry;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (clean(input.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const inquiry = {
    intent: input.intent === 'inspection' ? 'inspection' : 'quote',
    service: clean(input.service, 80),
    name: clean(input.name, limits.name),
    company: clean(input.company, limits.company),
    email: clean(input.email, limits.email),
    phone: clean(input.phone, limits.phone),
    address: clean(input.address, limits.address),
    details: clean(input.details, limits.details),
  };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email);
  if (!inquiry.name || !validEmail || !inquiry.address) {
    return NextResponse.json(
      { error: 'Name, valid email, and project address are required.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO_EMAIL;
  const from = process.env.CONTACT_FORM_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: 'Online email delivery is not configured.' },
      { status: 503 },
    );
  }

  const service =
    services.find((item) => item.key === inquiry.service)?.short || 'Other';
  const subject = `${inquiry.intent === 'inspection' ? 'Inspection request' : 'Quote request'} — ${service}`;
  const text = [
    'New website inquiry',
    '',
    `Request: ${inquiry.intent}`,
    `Service: ${service}`,
    `Name: ${inquiry.name}`,
    `Company: ${inquiry.company || 'Not provided'}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || 'Not provided'}`,
    `Project address: ${inquiry.address}`,
    '',
    'Project description:',
    inquiry.details || 'Not provided',
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Email delivery failed.' },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Email delivery failed.' },
      { status: 502 },
    );
  }
}
