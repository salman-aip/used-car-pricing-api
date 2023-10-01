import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('new user added successfully');
  }

  @AfterUpdate()
  logUpdate() {
    console.log('new user updated successfully');
  }

  @AfterRemove()
  logRemove() {
    console.log('user removed successfully');
  }
}
