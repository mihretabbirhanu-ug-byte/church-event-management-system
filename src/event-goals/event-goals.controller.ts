import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventGoalsService } from './event-goals.service';
import { EventGoal, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('event-goals')
@UseGuards(JwtAuthGuard)
export class EventGoalsController {
  constructor(private readonly eventGoalsService: EventGoalsService) {}

  @Post()
  create(@Body() createEventGoalDto: Prisma.EventGoalCreateInput): Promise<EventGoal> {
    return this.eventGoalsService.create(createEventGoalDto);
  }

  @Get()
  findAll(): Promise<EventGoal[]> {
    return this.eventGoalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EventGoal | null> {
    return this.eventGoalsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventGoalDto: any): Promise<EventGoal> {
    return this.eventGoalsService.update(id, updateEventGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EventGoal> {
    return this.eventGoalsService.remove(id);
  }
}
