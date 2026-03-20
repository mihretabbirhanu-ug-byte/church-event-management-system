import { Module } from '@nestjs/common';
import { EventNotesService } from './event-notes.service';
import { EventNotesController } from './event-notes.controller';

@Module({
  controllers: [EventNotesController],
  providers: [EventNotesService],
})
export class EventNotesModule {}
