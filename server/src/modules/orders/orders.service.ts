import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
import { DataSource, Repository } from 'typeorm';
import { Orders } from './entity/orders.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private readonly ordersRepository: Repository<Orders>,
        private readonly dataSource: DataSource
    ) { }

    async getAnalyticOrdersByYear() {
        try {
            const response = await this.dataSource
                .getRepository(Orders)
                .createQueryBuilder('order')
                .select(`CONCAT(order.createdDate)`, 'date')
                .addSelect(`COUNT(order.createdDate)`, 'sales')
                .groupBy(`order.createdDate`)
                .getRawMany()

            return response;
        } catch (error) {
            console.error(error.message);
            throw error;
        }

    }
}
