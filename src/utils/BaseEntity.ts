import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntityDate {
  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  update_at: Date;
}
