import { Orders } from './../../orders/entity/orders.entity';
import { Categorys } from './../../categorys/entity/categorys.entity';
import { Analytic } from './../../analytic/entity/analytic.entity';
import { Rating } from './../../ratings/entity/rating.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    oddPrice: number;

    @Column()
    newPrice: number;

    @OneToOne(() => Rating)
    @JoinColumn()
    rating: Rating;

    @OneToOne(() => Analytic)
    @JoinColumn()
    analytic: Analytic

    @OneToMany(() => Orders, (order) => order.courses)
    orders: Orders[];

    @ManyToOne(() => Categorys, (category) => category.id)
    category: Categorys;
}