import { IsEmail, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly email: string;
  @IsNumber()
  readonly createdAt?: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
