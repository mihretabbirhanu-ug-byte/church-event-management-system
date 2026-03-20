import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TaskUpdatesService } from './task-updates.service';
import { TaskUpdate, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('task-updates')
@UseGuards(JwtAuthGuard)
export class TaskUpdatesController {
  constructor(private readonly taskUpdatesService: TaskUpdatesService) {}

  @Post()
  create(@Body() createTaskUpdateDto: Prisma.TaskUpdateCreateInput): Promise<TaskUpdate> {
    return this.taskUpdatesService.create(createTaskUpdateDto);
  }

  @Get()
  findAll(): Promise<TaskUpdate[]> {
    return this.taskUpdatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TaskUpdate | null> {
    return this.taskUpdatesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskUpdateDto: any): Promise<TaskUpdate> {
    return this.taskUpdatesService.update(id, updateTaskUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TaskUpdate> {
    return this.taskUpdatesService.remove(id);
  }
}
