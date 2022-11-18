import { Courses } from '../../courses/entity/courses.entity';
import { Videos } from './../../videos/entity/video.entity';
import { Accounts } from './../../accounts/entity/accounts.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'date',
    })
    createdDate: Date

    @ManyToOne(() => Accounts, (account) => account.orders)
    accounts: Accounts

    @ManyToOne(() => Courses, (course) => course.orders)
    courses: Courses

    @OneToMany(() => Videos, (video) => video.id)
    videos: Videos[]
}