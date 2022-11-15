import { Comments } from "src/modules/comments/entity/comments.entity";
import { Courses } from "src/modules/courses/entity/courses.entity";
import { Videos } from "src/modules/videos/entity/video.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    viewCount: number

    @Column()
    watchTime: number

    @Column()
    bookingCount: number

    @OneToOne(() => Courses)
    @JoinColumn()
    course: Courses

    @OneToMany(() => Videos, (video) => video.analytic)
    videos: Videos[]

    // @OneToMany(() => Comments, (comment) => comment.analytic)
    // comments: Comments[]
}