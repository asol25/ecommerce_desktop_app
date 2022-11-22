import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}