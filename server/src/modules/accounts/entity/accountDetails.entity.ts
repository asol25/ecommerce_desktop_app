import { Roles } from './roles.entity';
import { Accounts } from './accounts.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AccountDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Accounts, (account) => account.id)
    accounts: Accounts;

    @ManyToOne(() => Roles, (role) => role.id)
    roles: Roles;
}