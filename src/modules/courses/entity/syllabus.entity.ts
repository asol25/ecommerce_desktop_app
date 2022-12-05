import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from "./courses.entity";

@Entity()
export class Syllabus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text", { array: true })
  paragraphs: string[];

  @ManyToOne(() => Courses, (courses) => courses.syllabus)
  course: Courses;
}
