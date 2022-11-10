import { Videos } from './../../videos/entity/video.entity';
import { Courses } from './../../courses/entity/course.entity';
import { Accounts } from './../../accounts/entity/accounts.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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