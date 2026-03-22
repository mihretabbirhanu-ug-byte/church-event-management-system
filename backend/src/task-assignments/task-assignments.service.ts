import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskAssignment, Prisma } from '@prisma/client';

@Injectable()
export class TaskAssignmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TaskAssignmentCreateInput): Promise<TaskAssignment> {
    return this.prisma.taskAssignment.create({ data });
  }

  async findAll(): Promise<TaskAssignment[]> {
    return this.prisma.taskAssignment.findMany({
      include: {
        task: true,
        user: true,
      },
    });
  }

  async findOne(id: string): Promise<TaskAssignment | null> {
    return this.prisma.taskAssignment.findUnique({
      where: { id },
      include: {
        task: true,
        user: true,
      },
    });
  }

  async update(id: string, data: any): Promise<TaskAssignment> {
    return this.prisma.taskAssignment.update({ where: { id }, data });
  }

  async remove(id: string): Promise<TaskAssignment> {
    return this.prisma.taskAssignment.delete({ where: { id } });
  }
}
