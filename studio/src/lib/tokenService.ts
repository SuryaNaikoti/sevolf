import crypto from 'crypto';

const SECRET = process.cwd() + (process.env.DOWNLOAD_SECRET || 'selvof_fallback_secret_for_signing');

export interface DownloadTokenPayload {
  orderId: string;
  format: 'a4' | 'letter';
  customerEmail: string;
  expiresAt: number; // Unix timestamp in seconds
}

/**
 * Creates a signed, tamper-proof, time-limited token
 */
export function generateDownloadToken(orderId: string, format: 'a4' | 'letter', email: string, validHours = 24): string {
  const expiresAt = Math.floor(Date.now() / 1000) + validHours * 3600;
  const payload: DownloadTokenPayload = {
    orderId,
    format,
    customerEmail: email,
    expiresAt,
  };

  const payloadStr = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(payloadStr)
    .digest('base64url');

  return `${payloadStr}.${signature}`;
}

/**
 * Verifies the token signature, expiration and returns payload
 */
export function verifyDownloadToken(token: string): { valid: boolean; error?: string; payload?: DownloadTokenPayload } {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { valid: false, error: 'Malformed token structure' };
    }

    const [payloadStr, signature] = parts;
    const expectedSig = crypto
      .createHmac('sha256', SECRET)
      .update(payloadStr)
      .digest('base64url');

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return { valid: false, error: 'Invalid token signature' };
    }

    const payloadJson = Buffer.from(payloadStr, 'base64url').toString('utf-8');
    const payload: DownloadTokenPayload = JSON.parse(payloadJson);

    const now = Math.floor(Date.now() / 1000);
    if (payload.expiresAt < now) {
      return { valid: false, error: 'Download token has expired' };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, error: err.message || 'Token verification failed' };
  }
}
