import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventInviteLinksService } from './event-invite-links.service';
import { EventInviteLink, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('event-invite-links')
@UseGuards(JwtAuthGuard)
export class EventInviteLinksController {
  constructor(private readonly eventInviteLinksService: EventInviteLinksService) {}

  @Post()
  create(@Body() createEventInviteLinkDto: Prisma.EventInviteLinkCreateInput): Promise<EventInviteLink> {
    return this.eventInviteLinksService.create(createEventInviteLinkDto);
  }

  @Get()
  findAll(): Promise<EventInviteLink[]> {
    return this.eventInviteLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EventInviteLink | null> {
    return this.eventInviteLinksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventInviteLinkDto: Prisma.EventInviteLinkUpdateInput): Promise<EventInviteLink> {
    return this.eventInviteLinksService.update(id, updateEventInviteLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EventInviteLink> {
    return this.eventInviteLinksService.remove(id);
  }
}
