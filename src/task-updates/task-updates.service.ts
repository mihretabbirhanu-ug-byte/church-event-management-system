import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskUpdate, Prisma } from '@prisma/client';

@Injectable()
export class TaskUpdatesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TaskUpdateCreateInput): Promise<TaskUpdate> {
    return this.prisma.taskUpdate.create({ data });
  }

  async findAll(): Promise<TaskUpdate[]> {
    return this.prisma.taskUpdate.findMany({
      include: {
        task: true,
        user: true,
      },
    });
  }

  async findOne(id: string): Promise<TaskUpdate | null> {
    return this.prisma.taskUpdate.findUnique({
      where: { id },
      include: {
        task: true,
        user: true,
      },
    });
  }

  async update(id: string, data: any): Promise<TaskUpdate> {
    return this.prisma.taskUpdate.update({ where: { id }, data });
  }

  async remove(id: string): Promise<TaskUpdate> {
    return this.prisma.taskUpdate.delete({ where: { id } });
  }
}
