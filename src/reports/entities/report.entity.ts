import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  price: number;
}
