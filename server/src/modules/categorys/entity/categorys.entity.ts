import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorys {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}