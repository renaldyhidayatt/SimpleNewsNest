import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, IsEmail } from 'class-validator';

export class AuthDto {
  @ApiProperty({ required: true })
  @IsEmail()
  @MinLength(6)
  @MaxLength(50)
  email?: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password?: string;
}
