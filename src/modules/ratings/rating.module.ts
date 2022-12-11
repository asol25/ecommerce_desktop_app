import { RatingService } from "./rating.service";
import { RatingController } from "./rating.controller";
import { Module } from "@nestjs/common";
import { Rating } from "./entity/rating.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingModule, RatingService],
})
export class RatingModule {}
