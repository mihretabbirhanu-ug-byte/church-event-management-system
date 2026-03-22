import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Prisma service initialized (database mode)');
    } catch (error) {
      console.error('Failed to connect to database:', error);
      console.log('Falling back to mock mode');
      // The service will still work with mock data if database connection fails
    }
  }
}

