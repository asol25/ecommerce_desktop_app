import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./accounts.entity";

@Entity()
export class Roles {
    @OneToMany(() => Accounts, (account) => account.role)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
}