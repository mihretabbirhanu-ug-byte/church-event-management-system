import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Registration, Prisma } from '@prisma/client';

@Injectable()
export class RegistrationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RegistrationCreateInput): Promise<Registration> {
    return this.prisma.registration.create({ data });
  }

  async findAll(): Promise<Registration[]> {
    return this.prisma.registration.findMany({
      include: {
        event: true,
        user: true,
      },
    });
  }

  async findOne(id: string): Promise<Registration | null> {
    return this.prisma.registration.findUnique({
      where: { id },
      include: {
        event: true,
        user: true,
      },
    });
  }

  async update(id: string, data: Prisma.RegistrationUpdateInput): Promise<Registration> {
    return this.prisma.registration.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Registration> {
    return this.prisma.registration.delete({ where: { id } });
  }
}
