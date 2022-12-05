import { Courses } from "../../courses/entity/courses.entity";
import { Videos } from "../../videos/entity/video.entity";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Analytic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  viewCount: number;

  @Column({ nullable: true })
  description!: string;

  @Column({ nullable: true })
  videoCount!: number;

  @Column()
  watchTime: number;

  @Column()
  bookingCount: number;

  @OneToOne(() => Courses)
  @JoinColumn()
  course: Courses;

  @OneToMany(() => Videos, (video) => video.analytic)
  videos: Videos[];
}
