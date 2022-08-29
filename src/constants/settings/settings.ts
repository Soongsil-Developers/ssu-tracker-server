export const Env = {
  NODE_ENV: 'NODE_ENV',
} as const;

export type Env = typeof Env[keyof typeof Env];
