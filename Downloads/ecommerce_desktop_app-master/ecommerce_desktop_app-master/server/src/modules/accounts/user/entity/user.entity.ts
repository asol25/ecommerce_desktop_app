import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, Length } from "class-validator";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    @Length(1, 20)
    username: string;

    @Column({ unique: true })
    @Length(8, 20)
    password: string;

    @Column()
    @Length(1, 3)
    verified: string;

    @Column()
    @Length(1, 10)
    status: string;

    @Column({ unique: true })
    @IsEmail()
    email: string

    @Column()
    accessToken: string

    @Column()
    refresshToken: string
}