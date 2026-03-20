import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { TasksModule } from './tasks/tasks.module';
import { EventInviteLinksModule } from './event-invite-links/event-invite-links.module';
import { TaskAssignmentsModule } from './task-assignments/task-assignments.module';
import { TaskUpdatesModule } from './task-updates/task-updates.module';
import { EventGoalsModule } from './event-goals/event-goals.module';
import { EventNotesModule } from './event-notes/event-notes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    EventsModule,
    RegistrationsModule,
    TasksModule,
    EventInviteLinksModule,
    TaskAssignmentsModule,
    TaskUpdatesModule,
    EventGoalsModule,
    EventNotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

