// Basic-auth gate for the whole site. The page source carries the widget ID,
// and anyone holding it can drive the chat API (and our OpenAI spend), so
// nothing is served until the visitor enters SITE_PASSWORD (any username).
// Fails closed: with SITE_PASSWORD unset, every request gets a 503.

declare const Netlify: { env: { get(key: string): string | undefined } };

const REALM = 'Summit Motors (internal)';

const timingSafeEqual = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

const passwordFrom = (header: string | null) => {
  if (!header?.startsWith('Basic ')) return null;
  try {
    const decoded = atob(header.slice('Basic '.length));
    const separator = decoded.indexOf(':');
    return separator === -1 ? null : decoded.slice(separator + 1);
  } catch {
    return null;
  }
};

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const expected = Netlify.env.get('SITE_PASSWORD');
  if (!expected) {
    return new Response('Site locked: SITE_PASSWORD is not configured.', { status: 503 });
  }

  const supplied = passwordFrom(request.headers.get('authorization'));
  if (supplied !== null && timingSafeEqual(supplied, expected)) {
    return context.next();
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"` },
  });
};

export const config = { path: '/*' };
