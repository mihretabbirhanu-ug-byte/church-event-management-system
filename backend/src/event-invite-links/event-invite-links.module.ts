import { Module } from '@nestjs/common';
import { EventInviteLinksService } from './event-invite-links.service';
import { EventInviteLinksController } from './event-invite-links.controller';

@Module({
  controllers: [EventInviteLinksController],
  providers: [EventInviteLinksService],
})
export class EventInviteLinksModule {}
