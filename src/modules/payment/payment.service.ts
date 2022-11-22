import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    private readonly ordersService: OrdersService
  ) { }
  async getAccountPayment(_accountId, _coursesId) {
    return (await this.ordersService.getOrdersRepository()).save({
      isActive: true,
      where: {
        accountId: _accountId,
        coursesId: _coursesId,
      }
    })
  }
}
