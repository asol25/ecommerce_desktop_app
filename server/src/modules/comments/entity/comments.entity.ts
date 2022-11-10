import { Accounts } from './../../accounts/entity/accounts.entity';
import { Videos } from './../../videos/entity/video.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(() => Videos, (video) => video.id)
    video: Videos

    @ManyToOne(() => Accounts, (account) => account.id)
    account: Accounts
}