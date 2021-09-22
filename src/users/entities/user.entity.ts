import { BaseEntityDate } from 'src/utils/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User extends BaseEntityDate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    select: false,
  })
  password: string;

  @Column()
  role: string;
}
