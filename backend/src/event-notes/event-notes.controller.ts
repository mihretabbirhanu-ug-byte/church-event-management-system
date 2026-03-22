import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventNotesService } from './event-notes.service';
import { EventNote, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('event-notes')
@UseGuards(JwtAuthGuard)
export class EventNotesController {
  constructor(private readonly eventNotesService: EventNotesService) {}

  @Post()
  create(@Body() createEventNoteDto: Prisma.EventNoteCreateInput): Promise<EventNote> {
    return this.eventNotesService.create(createEventNoteDto);
  }

  @Get()
  findAll(): Promise<EventNote[]> {
    return this.eventNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EventNote | null> {
    return this.eventNotesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventNoteDto: any): Promise<EventNote> {
    return this.eventNotesService.update(id, updateEventNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EventNote> {
    return this.eventNotesService.remove(id);
  }
}
