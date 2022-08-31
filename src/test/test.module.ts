import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestModelModule } from '@/models/test';

@Module({
  imports: [TestModelModule],
  controllers: [TestController],
})
export class TestModule {}
