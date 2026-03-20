import { IsEmail, IsNotEmpty, IsString, IsEnum, IsPhoneNumber } from 'class-validator';
import { Role } from '../../types/prisma';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  role: Role;
}
