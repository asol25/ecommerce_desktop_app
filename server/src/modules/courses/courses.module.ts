import { VideosModule } from "./../videos/videos.module";
import { CoursesService } from "./courses.service";
import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Courses } from "./entity/courses.entity";
import { Syllabus } from "./entity/syllabus.entity";
import { FAQ } from "./entity/fqa.entity";
import { Specialization } from "./entity/specialization.entity";
import { AnalyticsModule } from "../analytic/analytic.module";
import { RatingModule } from "../ratings/rating.module";

@Module({
  imports: [
    AnalyticsModule,
    VideosModule,
    RatingModule,
    TypeOrmModule.forFeature([Courses, Syllabus, FAQ, Specialization]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesModule],
})
export class CoursesModule {}
