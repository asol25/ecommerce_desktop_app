import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommencesController } from "./commentes.controller";
import { CommencesService } from "./commentes.service";
import { Comments } from "./entity/comments.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  providers: [CommencesService],
  controllers: [CommencesController],
})
export class CommencesModule {}
