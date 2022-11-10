import { Courses } from './../../courses/entity/course.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class Analytic {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Courses)
    @JoinColumn()
    course: Courses

    @Column()
    viewCount: number

    @Column()
    watchTime: number

    @Column()
    bookingCount: number
}