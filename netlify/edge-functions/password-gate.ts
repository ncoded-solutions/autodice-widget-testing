// Basic-auth gate for the whole site. The page source carries the widget ID,
// and anyone holding it can drive the chat API (and our OpenAI spend), so
// nothing is served until the visitor enters SITE_PASSWORD, in either field.
// Fails closed: with SITE_PASSWORD unset, every request gets a 503.

declare const Netlify: { env: { get(key: string): string | undefined } };

const REALM = 'Summit Motors (internal)';

const timingSafeEqual = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

// What the visitor typed in the sign-in box, username and password both: people put the password
// in the username field too. UTF-8, as the realm asks, so a pasted typographic dash survives to be
// normalized below.
const credentialsFrom = (header: string | null): string[] => {
  if (!header?.startsWith('Basic ')) return [];
  try {
    const bytes = Uint8Array.from(atob(header.slice('Basic '.length)), (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    const separator = decoded.indexOf(':');
    return separator === -1 ? [decoded] : [decoded.slice(0, separator), decoded.slice(separator + 1)];
  } catch {
    return [];
  }
};

// Forgives what copying a password from an email or chat tends to do to it: spaces around it, and
// hyphens turned into en or em dashes (or a minus sign).
const normalize = (value: string) => value.trim().replace(/[\u2010-\u2015\u2212]/g, '-');

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const expected = Netlify.env.get('SITE_PASSWORD');
  if (!expected) {
    return new Response('Site locked: SITE_PASSWORD is not configured.', { status: 503 });
  }

  const password = normalize(expected);
  const supplied = credentialsFrom(request.headers.get('authorization'));
  if (supplied.some((value) => timingSafeEqual(normalize(value), password))) {
    return context.next();
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` },
  });
};

export const config = { path: '/*' };
