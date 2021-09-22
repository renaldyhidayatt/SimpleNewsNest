import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  CategoryByIdDto,
  CategoryDto,
} from 'src/category/dto/create-category.dto';
import { IsExist } from 'src/etc/validator/exists-validator';
import { Posts } from '../entities/post.entity';

export class PostsDto {
  @ApiProperty({
    required: true,
  })
  @IsOptional()
  @IsExist([Posts, 'id'])
  id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  description: string;

  @ApiProperty({ type: CategoryByIdDto })
  @ValidateNested()
  @IsOptional()
  @IsObject()
  category: CategoryByIdDto;
}

export class CreatePostDto extends OmitType(PostsDto, ['id']) {}
export class PostByIdDto extends PickType(PostsDto, ['id']) {}
