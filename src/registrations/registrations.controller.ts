import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { Registration, Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('registrations')
@UseGuards(JwtAuthGuard)
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  create(@Body() createRegistrationDto: Prisma.RegistrationCreateInput): Promise<Registration> {
    return this.registrationsService.create(createRegistrationDto);
  }

  @Get()
  findAll(): Promise<Registration[]> {
    return this.registrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Registration | null> {
    return this.registrationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: Prisma.RegistrationUpdateInput): Promise<Registration> {
    return this.registrationsService.update(id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Registration> {
    return this.registrationsService.remove(id);
  }
}
