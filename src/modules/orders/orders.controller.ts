import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService) { }

    @Get('totalBought')
    async getTotalBought(@Param() params) {
        const { month } = params;
        return await this.ordersService.getTotalBought();
    }

    @Get('payment/:id')
    async getAccountPaymentCourse(@Param() params) {
        const { id } = params;
        return await this.ordersService.getAccountPaymentCourse(id);
    }

    @Get(':month')
    async getAnalyticOrdersByNowMonth(@Param() params) {
        const { month } = params;
        return await this.ordersService.getAnalyticOrdersByNowMonth(month);
    }
}
