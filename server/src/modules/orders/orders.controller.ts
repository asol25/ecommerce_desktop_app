import { Controller, Get, Logger, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  logger: Logger;
  constructor(private ordersService: OrdersService) {
    this.logger = new Logger(OrdersController.name);
  }

  @Get("total/bought")
  getTotalBought() {
    this.logger.log("The controller start GET #totalBought");
    this.logger.log("The controller start transform OrderService");
    return this.ordersService.getTotalBought();
  }

  @Get(":month")
  async getAnalyticOrdersByNowMonth(@Param() params) {
    this.logger.log("The controller start GET #:month");
    const { month } = params;
    this.logger.log("The params of #Month: " + month);
    this.logger.log("The controller start transform OrderService");
    return await this.ordersService.getAnalyticOrdersByNowMonth(month);
  }

  @Get("payment/:email")
  async getAccountPaymentCourse(@Param() params) {
    this.logger.log("The controller start GET #payment/:email");
    const { email } = params;
    this.logger.log("The params of #Payment: #" + email);
    this.logger.log("The controller start transform OrderService");
    return await this.ordersService.getAccountPaymentCourse(email);
  }

  @Get("getOrdersBySlug/:id/:email")
  getOrdersById(@Param() params) {
    this.logger.log("The controller start GET #getOrdersBySlug/:id/:email");
    const { id, email } = params;
    this.logger.log(
      `The params of #getOrdersBySlug: #id: #${id} - #email: #${email}`,
    );
    this.logger.log("The controller start transform OrderService");
    return this.ordersService.getOrdersBySlug(id, email);
  }

  @Get("created/account/:accountId/course/:coursesId")
  createdAccountBought(@Param() params) {
    this.logger.log(
      "The controller start GET #created/account/:accountId/course/:coursesId",
    );
    const { accountId, coursesId } = params;
    this.logger.log(
      `The params of #created/account: #accountId: #${accountId} - #coursesId: #${coursesId}`,
    );
    this.logger.log("The controller start transform OrderService");
    return this.ordersService.createdAccountBought(params);
  }

  @Get("total/prices")
  getTotalPrice() {
    this.logger.log("GET TotalPrice");
    return this.ordersService.getTotalPrice();
  }

  @Get("total/prices/year")
  getAnalyticOrdersByNowYear() {
    this.logger.log("GET TotalPriceYear");
    return this.ordersService.getAnalyticOrdersByNowYear();
  }
}
