import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { IsExist } from 'src/etc/validator/exists-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';
import { Category } from '../entities/category.entity';

export class CategoryDto {
  @ApiProperty()
  @IsExist([Category, ['id']])
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(50)
  @IsUnique([Category, 'name'])
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @MaxLength(50)
  description: string;
}

export class CreateCategoryDto extends OmitType(CategoryDto, ['id']) {}
export class CategoryByIdDto extends PickType(CategoryDto, ['id']) {}
