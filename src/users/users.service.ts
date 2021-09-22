import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    createUserDto.password = this.hash(createUserDto.password);

    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.id = id;
    if (updateUserDto.password) {
      updateUserDto.password = this.hash(updateUserDto);
    }
    return this.userRepository.save(updateUserDto);
  }

  findEmail(email) {
    return this.userRepository.findOne(
      { email: email },
      { select: ['id', 'password'] },
    );
  }

  async remove(id: number) {
    let user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user);
  }

  hash(plainPassword) {
    const hash = bcrypt.hashSync(plainPassword, 10);
    return hash;
  }

  comparePassword(plainPassword, hash) {
    const valid = bcrypt.compareSync(plainPassword, hash);
    return valid;
  }
}
