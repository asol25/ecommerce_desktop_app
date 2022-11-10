import { Courses } from "src/modules/courses/entity/courses.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorys {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Courses, (course) => course.id)
    order: Courses[]
}