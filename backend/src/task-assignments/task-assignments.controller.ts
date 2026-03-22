import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TaskAssignmentsService } from './task-assignments.service';
import { TaskAssignment, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('task-assignments')
@UseGuards(JwtAuthGuard)
export class TaskAssignmentsController {
  constructor(private readonly taskAssignmentsService: TaskAssignmentsService) {}

  @Post()
  create(@Body() createTaskAssignmentDto: Prisma.TaskAssignmentCreateInput): Promise<TaskAssignment> {
    return this.taskAssignmentsService.create(createTaskAssignmentDto);
  }

  @Get()
  findAll(): Promise<TaskAssignment[]> {
    return this.taskAssignmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TaskAssignment | null> {
    return this.taskAssignmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskAssignmentDto: any): Promise<TaskAssignment> {
    return this.taskAssignmentsService.update(id, updateTaskAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TaskAssignment> {
    return this.taskAssignmentsService.remove(id);
  }
}
