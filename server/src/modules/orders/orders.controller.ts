import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get(":month")
  async getAnalyticOrdersByNowMonth(@Param() params) {
    const { month } = params;
    return await this.ordersService.getAnalyticOrdersByNowMonth(month);
  }

  @Get("payment/:id")
  async getAccountPaymentCourse(@Param() params) {
    const { id } = params;
    return await this.ordersService.getAccountPaymentCourse(id);
  }

  @Get("totalBought")
  async getTotalBought(@Param() params) {
    return await this.ordersService.getTotalBought();
  }

  @Get("created/account/:accountId/course/:coursesId")
  creteaAccountBought(@Param() params) {
    const { accountId, coursesId } = params;

    console.log({ accountId, coursesId });

    return this.ordersService.creteaAccountBought(params);
  }
}
