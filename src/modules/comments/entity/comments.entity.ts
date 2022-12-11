import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./../../accounts/entity/accounts.entity";
import { Videos } from "./../../videos/entity/video.entity";

@Entity()
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @ManyToOne(() => Videos, (video) => video.comments)
  video: Videos;

  @ManyToOne(() => Accounts, (account) => account.id)
  account: Accounts;
}
