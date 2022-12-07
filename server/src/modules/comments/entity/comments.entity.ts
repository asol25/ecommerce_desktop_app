import { Accounts } from "./../../accounts/entity/accounts.entity";
import { Videos } from "./../../videos/entity/video.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Analytic } from "src/modules/analytic/entity/analytic.entity";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @ManyToOne(() => Videos, (video) => video.comments)
  video: Videos;

  @ManyToOne(() => Accounts, (account) => account.id)
  account: Accounts;
}
