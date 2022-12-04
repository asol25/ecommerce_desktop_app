import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Videos } from "./../../videos/entity/video.entity";
import { Analytic } from "./../../analytic/entity/analytic.entity";
import { Categories } from "./../../categorys/entity/categories.entity";
import { Orders } from "./../../orders/entity/orders.entity";
import { Rating } from "./../../ratings/entity/rating.entity";
import { FAQ } from "./fqa.entity";
import { Specialization } from "./specialization.entity";
import { Syllabus } from "./syllabus.entity";

@Entity()
export class Courses extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  overviews!: string;

  @Column()
  thumbnailUrl: string;

  @Column({ nullable: true })
  article!: string;

  @Column()
  oddPrice: number;

  @Column()
  newPrice: number;

  @OneToOne(() => Specialization)
  @JoinColumn()
  specialization: Specialization;

  @OneToOne(() => Rating)
  @JoinColumn()
  rating: Rating;

  @OneToMany(() => Syllabus, (syllabus) => syllabus.course)
  syllabus: Syllabus[];

  @OneToMany(() => Videos, (video) => video.course)
  video: Videos[];

  @OneToMany(() => FAQ, (FAQ) => FAQ.course)
  faq: FAQ[];

  @OneToOne(() => Analytic)
  @JoinColumn()
  analytic: Analytic;

  @OneToMany(() => Orders, (order) => order.courses)
  orders: Orders[];

  @ManyToOne(() => Categories, (category) => category.id)
  category: Categories;
}
