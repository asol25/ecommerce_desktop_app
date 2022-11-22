import { Courses } from './../../courses/entity/courses.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Analytic } from './../../analytic/entity/analytic.entity';
import { Comments } from './../../comments/entity/comments.entity';

@Entity()
export class Videos {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'date', 
    })
    createdDate: Date

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbanailUrl: string;

    @Column()
    videoUrl: string;

    @OneToMany(() => Comments, (comment) => comment.video)
    comments: Comments[]

    @ManyToOne(() => Courses, (course) => course.id)
    course: Courses

    @ManyToOne(() => Analytic, (analytic) => analytic.videos)
    analytic: Analytic
}