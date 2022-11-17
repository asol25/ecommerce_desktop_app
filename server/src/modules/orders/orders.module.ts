import { OrdersService } from './orders.service';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entity/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
