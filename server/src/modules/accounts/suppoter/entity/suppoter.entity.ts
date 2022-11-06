import { IsEmail, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Suppoter {
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