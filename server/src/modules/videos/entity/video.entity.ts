import { Courses } from "./../../courses/entity/courses.entity";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Analytic } from "./../../analytic/entity/analytic.entity";
import { Comments } from "./../../comments/entity/comments.entity";

@Entity()
export class Videos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: "date",
  })
  createdDate: Date;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbanailUrl: string;

  @Column()
  videoUrl: string;

  @OneToMany(() => Comments, (comment) => comment.video)
  comments: Comments[];

  @ManyToOne(() => Courses, (course) => course.video)
  course: Courses;

  @ManyToOne(() => Analytic, (analytic) => analytic.videos)
  analytic: Analytic;
}
