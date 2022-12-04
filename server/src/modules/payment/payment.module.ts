import { Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { HttpModule } from "@nestjs/axios";
import moment from "moment";

@Module({
  imports: [HttpModule],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    {
      provide: "MomentWrapper",
      useValue: moment,
    },
  ],
})
export class PaymentModule {}
