import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const SECRET = process.env.AUTH_SECRET || 'change-me';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '8h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

export function parseTokenFromReq(req) {
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie || '') : {};
  return cookies.token || null;
}

export function setTokenCookie(res, token) {
  const serialized = cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });
  res.setHeader('Set-Cookie', serialized);
}

export function clearTokenCookie(res) {
  const serialized = cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0)
  });
  res.setHeader('Set-Cookie', serialized);
}
// Add these functions to your lib/auth.js

export function verifyToken(token) {
  try {
    // Your token verification logic here
    // For demo, you can decode JWT or use your existing method
    return { username: 'lance' }; // Replace with actual verification
  } catch (error) {
    return null;
  }
}

export function getTokenFromCookie(req) {
  const cookies = req.headers.cookie;
  if (!cookies) return null;
  
  const tokenCookie = cookies.split(';').find(c => c.trim().startsWith('token='));
  return tokenCookie ? tokenCookie.split('=')[1] : null;
}

export function clearTokenCookie(res) {
  res.setHeader('Set-Cookie', 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict');
}