import { Orders } from "src/modules/orders/entity/orders.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categorys } from 'src/modules/categorys/entity/categorys.entity';
import { Rating } from "src/modules/ratings/entity/rating.entity";

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

    @OneToOne(() => Rating)
    rating: Rating

    @OneToMany(() => Orders, (order) => order.id)
    order: Orders[]

    @ManyToOne(() => Categorys, (category) => category.id)
    category: Categorys
}