import { Videos } from './../../videos/entity/video.entity';
import { Accounts } from './../../accounts/entity/accounts.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Courses } from 'src/modules/courses/entity/courses.entity';

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Accounts, (account) => account.id)
    accounts: Accounts

    @ManyToOne(() => Courses, (course) => course.id)
    courses: Courses

    @OneToMany(() => Videos, (video) => video.id)
    videos: Videos[]
}