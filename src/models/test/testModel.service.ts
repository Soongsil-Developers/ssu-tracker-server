import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/providers/prisma';
import { Prisma, test as Test } from '@prisma/client';

@Injectable()
export class TestModelService {
  constructor(private prisma: PrismaService) {}

  async test(
    testWhereUniqueInput: Prisma.testWhereUniqueInput,
  ): Promise<Test | null> {
    return this.prisma.test.findUnique({
      where: testWhereUniqueInput,
    });
  }

  async tests(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.testWhereUniqueInput;
    where?: Prisma.testWhereInput;
    orderBy?: Prisma.testOrderByWithRelationInput;
  }): Promise<Test[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.test.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTest(data: Prisma.testCreateInput): Promise<Test> {
    return this.prisma.test.create({ data });
  }

  async updateTest(params: {
    where: Prisma.testWhereUniqueInput;
    data: Prisma.testUpdateInput;
  }): Promise<Test> {
    const { where, data } = params;
    return this.prisma.test.update({ data, where });
  }

  async deleteTest(where: Prisma.testWhereUniqueInput): Promise<Test> {
    return this.prisma.test.delete({ where });
  }
}
