import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./accounts.entity";

@Entity()
export class Tokens {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accessToken: string

    @Column()
    refresshToken: string

    @OneToOne(() => Accounts)
    @JoinColumn()
    accounts: Accounts
}