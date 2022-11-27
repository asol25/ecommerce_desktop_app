import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import { Roles } from "./roles.entity";
import { Orders } from "../../orders/entity/orders.entity";
import { Area } from "../../area/entities/area.entity";
import { Country } from "../../country/entities/country.entity";

@Entity()
export class Accounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(1, 20)
  username: string;

  @Column({ nullable: true })
  password!: string;

  @Column()
  @Length(1, 3)
  verified: string;

  @Column()
  @Length(1, 10)
  status: string;

  @Column({ nullable: true })
  email_verified!: boolean;

  @Column({ nullable: true })
  locale!: string;

  @Column({ nullable: true })
  picture!: string;

  @Column({ nullable: true })
  sub!: string;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @ManyToOne(() => Roles, (role) => role.id)
  role: Roles;

  @OneToMany(() => Orders, (order) => order.accounts)
  orders: Orders[];

  @ManyToOne(() => Area, (area) => area.accounts)
  area: Area;

  @ManyToOne(() => Country, (country) => country.accounts)
  country: Country;

  @Column({ nullable: true })
  accessToken!: string;

  @Column({ nullable: true })
  refreshToken!: string;
}
