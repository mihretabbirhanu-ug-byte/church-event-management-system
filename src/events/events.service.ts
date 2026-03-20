import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Event, Prisma } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({ data });
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany({
      include: {
        createdBy: true,
        registrations: {
          include: {
            user: true,
          },
        },
        tasks: true,
        goals: true,
        notes: {
          include: {
            user: true,
          },
        },
        inviteLinks: true,
      },
    });
  }

  async findOne(id: string): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        createdBy: true,
        registrations: {
          include: {
            user: true,
          },
        },
        tasks: true,
        goals: true,
        notes: {
          include: {
            user: true,
          },
        },
        inviteLinks: true,
      },
    });
  }

  async update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
    return this.prisma.event.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Event> {
    return this.prisma.event.delete({ where: { id } });
  }
}
