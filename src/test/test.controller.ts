import { Controller, Get, Post } from '@nestjs/common';
import { TestModelService } from '@/models/test';
import { test as TestModel } from '@prisma/client';

@Controller()
export class TestController {
  constructor(private readonly testModelService: TestModelService) {}

  @Get('test/test')
  async test(): Promise<TestModel | null> {
    return this.testModelService.test({ id: 5 });
  }

  @Post('test/make')
  async make(): Promise<TestModel> {
    return this.testModelService.createTest({ test: 'hello world!' });
  }
}
