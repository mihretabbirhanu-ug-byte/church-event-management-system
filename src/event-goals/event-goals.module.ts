import { Module } from '@nestjs/common';
import { EventGoalsService } from './event-goals.service';
import { EventGoalsController } from './event-goals.controller';

@Module({
  controllers: [EventGoalsController],
  providers: [EventGoalsService],
})
export class EventGoalsModule {}
