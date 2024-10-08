// External Dependencies
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { handle } from 'hono/vercel';
import { clerkMiddleware } from '@hono/clerk-auth';

// Relative Dependencies
import spaces from './spaces';
import messages from './messages';
import users from './users';

export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

app.use(
  '*',
  cors({
    origin: ['https://canvaschat.xyz', 'https://www.canvaschat.xyz'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'Origin',
      'X-Requested-With',
    ],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
);

app.use('*', clerkMiddleware());

const routes = app
  .route('/spaces', spaces)
  .route('/messages', messages)
  .route('/users', users);

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
