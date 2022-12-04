import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";

@Entity()
export class FAQ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Courses, (courses) => courses.syllabus)
  course: Courses;
}
