import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find({ relations: ['posts'] });
  }

  findOne(id: number) {
    return this.categoryRepository.findOneOrFail(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    updateCategoryDto.id = id;
    return this.categoryRepository.save(UpdateCategoryDto);
  }

  async remove(id: number) {
    let user = await this.categoryRepository.findOne(id);
    return this.categoryRepository.remove(user);
  }
}
