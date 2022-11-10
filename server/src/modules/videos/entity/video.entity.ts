import { Courses } from "src/modules/courses/entity/course.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Videos, (video) => video.id)
    videos: Videos[]
}