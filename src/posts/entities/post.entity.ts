import { Exclude } from 'class-transformer';
import { Category } from 'src/category/entities/category.entity';
import { BaseEntityDate } from 'src/utils/BaseEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts extends BaseEntityDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (cat) => cat.id)
  category: Category;
}
