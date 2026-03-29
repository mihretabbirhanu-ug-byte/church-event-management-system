import { IsEmail, IsOptional, IsString, IsEnum, IsPhoneNumber } from 'class-validator';
import { Role } from '../../types/prisma';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string | null;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}
