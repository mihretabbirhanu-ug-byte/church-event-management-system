import { Module } from '@nestjs/common';
import { TaskUpdatesService } from './task-updates.service';
import { TaskUpdatesController } from './task-updates.controller';

@Module({
  controllers: [TaskUpdatesController],
  providers: [TaskUpdatesService],
})
export class TaskUpdatesModule {}
