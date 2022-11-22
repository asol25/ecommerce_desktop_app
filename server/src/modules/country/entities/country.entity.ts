import { Accounts } from "../../accounts/entity/accounts.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Accounts, (account) => account.country)
    accounts: Accounts[];
}
