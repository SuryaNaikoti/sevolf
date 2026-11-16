const AUTH_SECRET = process.env.ADMIN_PASSWORD || 'selvof_studio_owner_2026';

function stringToBufferSource(str: string): Uint8Array {
  const enc = new TextEncoder().encode(str);
  return new Uint8Array(enc);
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function hmacSha256(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    stringToBufferSource(secret) as any,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, stringToBufferSource(message) as any);
  return bufferToHex(sig);
}

export async function createAdminSessionToken(): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000);
  const payload = `owner:${timestamp}`;
  const sig = await hmacSha256(payload, AUTH_SECRET);
  const payloadB64 = btoa(payload);
  return `${payloadB64}.${sig}`;
}

export async function verifyAdminSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  try {
    const [payloadB64, sig] = token.split('.');
    if (!payloadB64 || !sig) return false;

    const payload = atob(payloadB64);
    const [role, timeStr] = payload.split(':');
    if (role !== 'owner') return false;

    // Check expiration (7 days validity)
    const timestamp = parseInt(timeStr, 10);
    const now = Math.floor(Date.now() / 1000);
    if (now - timestamp > 7 * 86400) return false;

    const expectedSig = await hmacSha256(payload, AUTH_SECRET);
    return sig === expectedSig;
  } catch {
    return false;
  }
}
