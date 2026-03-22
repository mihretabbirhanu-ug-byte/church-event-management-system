import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventInviteLink, Prisma } from '@prisma/client';

@Injectable()
export class EventInviteLinksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventInviteLinkCreateInput): Promise<EventInviteLink> {
    return this.prisma.eventInviteLink.create({ data });
  }

  async findAll(): Promise<EventInviteLink[]> {
    return this.prisma.eventInviteLink.findMany({
      include: {
        event: true,
      },
    });
  }

  async findOne(id: string): Promise<EventInviteLink | null> {
    return this.prisma.eventInviteLink.findUnique({
      where: { id },
      include: {
        event: true,
      },
    });
  }

  async update(id: string, data: Prisma.EventInviteLinkUpdateInput): Promise<EventInviteLink> {
    return this.prisma.eventInviteLink.update({ where: { id }, data });
  }

  async remove(id: string): Promise<EventInviteLink> {
    return this.prisma.eventInviteLink.delete({ where: { id } });
  }
}
