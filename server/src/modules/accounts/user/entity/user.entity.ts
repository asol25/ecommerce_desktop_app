import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, Length } from "class-validator";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 20)
    username: string;

    @Column()
    @Length(8, 20)
    password: string;

    @Column()
    @IsEmail()
    email: string

    @Column()
    accessToken: string

    @Column()
    refresshToken: string
}