import { IsOptional, IsString, IsEmail, IsEnum } from 'class-validator';
import { ROLE, User } from '../entities/user.entity';
import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IsExist } from 'src/etc/validator/exists-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';

export class UserDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  @IsExist([User, 'id'])
  id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @IsUnique([User, 'email'])
  email: string;

  @ApiProperty({
    required: true,
    default: ROLE.ADMIN,
    description: 'USER OR ADMIN',
  })
  @IsString()
  role: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  password: string;
}

export class CreateUserDto extends OmitType(UserDto, ['id']) {}
export class UserById extends PickType(UserDto, ['id']) {}
