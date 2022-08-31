import { Module } from '@nestjs/common';
import { PrismaService } from '@/providers/prisma';
import { TestModelService } from './testModel.service';

@Module({
  providers: [TestModelService, PrismaService],
  exports: [TestModelService],
})
export class TestModelModule {}
