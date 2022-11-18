import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsEmail, Length } from "class-validator";
import { Roles } from './roles.entity';
import { Orders } from 'src/modules/orders/entity/orders.entity';
import { Area } from 'src/modules/area/entities/area.entity';
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

    @OneToMany(() => Orders, (order) => order.accounts)
    orders: Orders[];

    @ManyToOne(() => Area, (area) => area.accounts)
    area: Area;
}