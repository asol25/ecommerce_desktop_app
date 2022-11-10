import { Orders } from "src/modules/orders/entity/orders.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categorys } from 'src/modules/categorys/entity/categorys.entity';

@Entity()
export class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbnailUrl: string

    @OneToMany(() => Orders, (order) => order.id)
    order: Orders[]

    @ManyToOne(() => Categorys, (category) => category.id)
    category: Categorys
}