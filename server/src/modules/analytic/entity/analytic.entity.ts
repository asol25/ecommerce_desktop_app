import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}