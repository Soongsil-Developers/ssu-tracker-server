export const Env = {
  NODE_ENV: 'NODE_ENV',
  DATABASE_URL: 'DATABASE_URL',
} as const;

export type Env = typeof Env[keyof typeof Env];
