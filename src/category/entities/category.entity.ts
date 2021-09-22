import { Posts } from 'src/posts/entities/post.entity';
import { BaseEntityDate } from 'src/utils/BaseEntity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Lanjut

@Entity()
export class Category extends BaseEntityDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Posts, (pos) => pos.category)
  posts: Posts;
}
