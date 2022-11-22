import { Accounts } from "../../accounts/entity/accounts.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Accounts, (account) => account.area)
    accounts: Accounts[];
}
