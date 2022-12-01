import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnalyticsController } from "./analytic.controller";
import { AnalyticsService } from "./analytic.service";
import { Analytic } from "./entity/analytic.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Analytic])],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
