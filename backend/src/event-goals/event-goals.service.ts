import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventGoal, Prisma } from '@prisma/client';

@Injectable()
export class EventGoalsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventGoalCreateInput): Promise<EventGoal> {
    return this.prisma.eventGoal.create({ data });
  }

  async findAll(): Promise<EventGoal[]> {
    return this.prisma.eventGoal.findMany({
      include: {
        event: true,
      },
    });
  }

  async findOne(id: string): Promise<EventGoal | null> {
    return this.prisma.eventGoal.findUnique({
      where: { id },
      include: {
        event: true,
      },
    });
  }

  async update(id: string, data: any): Promise<EventGoal> {
    return this.prisma.eventGoal.update({ where: { id }, data });
  }

  async remove(id: string): Promise<EventGoal> {
    return this.prisma.eventGoal.delete({ where: { id } });
  }
}
