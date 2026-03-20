import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventNote, Prisma } from '@prisma/client';

@Injectable()
export class EventNotesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventNoteCreateInput): Promise<EventNote> {
    return this.prisma.eventNote.create({ data });
  }

  async findAll(): Promise<EventNote[]> {
    return this.prisma.eventNote.findMany({
      include: {
        event: true,
        user: true,
      },
    });
  }

  async findOne(id: string): Promise<EventNote | null> {
    return this.prisma.eventNote.findUnique({
      where: { id },
      include: {
        event: true,
        user: true,
      },
    });
  }

  async update(id: string, data: any): Promise<EventNote> {
    return this.prisma.eventNote.update({ where: { id }, data });
  }

  async remove(id: string): Promise<EventNote> {
    return this.prisma.eventNote.delete({ where: { id } });
  }
}
