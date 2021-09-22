import { PartialType } from '@nestjs/swagger';
import { CategoryDto } from 'src/category/dto/create-category.dto';

export class UpdatePostDto extends PartialType(CategoryDto) {}
