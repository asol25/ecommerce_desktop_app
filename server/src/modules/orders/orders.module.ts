import { OrdersService } from './orders.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [OrdersService]
})
export class OrdersModule {}
