import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    flag: number;
  
    @Column()
    like: number;
  
    @Column()
    love: number;

    @Column()
    star: number;
}