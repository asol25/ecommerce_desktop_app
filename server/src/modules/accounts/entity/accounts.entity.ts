import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { IsEmail, Length } from "class-validator";
import { Roles } from './roles.entity';
import { Orders } from '../../orders/entity/orders.entity';
import { Area } from '../../area/entities/area.entity';
import { Country } from '../../country/entities/country.entity';
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

    @ManyToOne(() => Country, (country) => country.accounts)
    country: Country;

    @Column()
    accessToken: string;

    @Column()
    refreshToken: string;
}