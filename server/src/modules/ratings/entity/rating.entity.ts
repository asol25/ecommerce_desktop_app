import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Rating extends BaseEntity {
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
