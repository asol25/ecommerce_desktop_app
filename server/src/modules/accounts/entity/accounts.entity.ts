import { Comments } from './../../comments/entity/comments.entity';
import { Orders } from './../../orders/entity/orders.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IsEmail, Length } from "class-validator";
import { Roles } from './roles.entity';
@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    @Length(1, 20)
    username: string;

    @Column()
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

    @ManyToOne(() => Roles, (role) => role.id)
    role: Roles;
}