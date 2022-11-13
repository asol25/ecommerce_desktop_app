import { Courses } from './../../courses/entity/courses.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Videos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbanailUrl: string;
   
    @Column()
    videoUrl: string;

    @ManyToOne(() => Courses, (course) => course.id)
    course: Courses
}