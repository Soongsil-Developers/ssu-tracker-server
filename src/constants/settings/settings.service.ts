import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from './settings';

@Injectable()
export class SettingsConfigService {
  constructor(private configService: ConfigService) {}

  get isProd(): boolean {
    return this.configService.get(Env.NODE_ENV) === 'production';
  }
}
