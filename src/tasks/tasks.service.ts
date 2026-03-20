import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task, Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany({
      include: {
        event: true,
        createdBy: true,
        assignments: {
          include: {
            user: true,
          },
        },
        updates: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id },
      include: {
        event: true,
        createdBy: true,
        assignments: {
          include: {
            user: true,
          },
        },
        updates: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async update(id: string, data: Prisma.TaskUpdateInput): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}
