import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SettingsConfigService } from './settings.service';
import * as Joi from 'joi';
import { Env } from './settings';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env[Env.NODE_ENV] === 'production',
      validationSchema: Joi.object<typeof Env, true>({
        [Env.NODE_ENV]: Joi.string()
          .valid('development', 'production')
          .default('development'),
        [Env.DATABASE_URL]: Joi.string().required(),
      }),
    }),
  ],
  providers: [SettingsConfigService],
  exports: [SettingsConfigService],
})
export class SettingsConfigModule {}
