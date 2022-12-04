import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Analytic } from "./entity/analytic.entity";

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytic)
    private analyticsRepository: Repository<Analytic>,
    private dataSourse: DataSource,
  ) {}

  getAnalyticsRepository() {
    return this.analyticsRepository;
  }

  async getListInformationAnalytic() {
    try {
      const response = await this.dataSourse
        .getRepository(Analytic)
        .createQueryBuilder("analytic")
        .leftJoin("analytic.course", "course")
        .addSelect("course.title")
        .leftJoin("analytic.videos", "video")
        .addSelect("video.id")
        .addSelect("video.title")
        .addSelect("video.createdDate")
        .leftJoinAndSelect("video.comments", "comment")
        .loadRelationCountAndMap("video.comments", "video.comments")
        .getMany();

      if (!response)
        throw new NotFoundException(
          "The action getListInformationAnalytic was not found",
        );
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
