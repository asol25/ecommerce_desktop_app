import { CreateVideoDto } from "./../videos/dto/create-video.dto";
import { AnalyticsService } from "./../analytic/analytic.service";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Analytic } from "../analytic/entity/analytic.entity";
import { Videos } from "../videos/entity/video.entity";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Courses } from "./entity/courses.entity";
import { VideosService } from "../videos/videos.service";
import { CreateAnalyticDto } from "../analytic/dto/create-analytic.dto";

@Injectable()
export class CoursesService {
  logger: Logger;
  constructor(
    @InjectRepository(Courses)
    private coursesRepository: Repository<Courses>,
    private analyticService: AnalyticsService,
    private videosService: VideosService,
  ) {
    this.logger = new Logger(CoursesService.name);
  }

  async findAll(): Promise<Courses[]> {
    const response = await this.coursesRepository.find({
      relations: {
        rating: true,
        category: true,
      },
    });
    return response;
  }

  async getContentCourses(_id): Promise<Courses> {
    try {
      const response = await this.coursesRepository.findOne({
        relations: {
          rating: true,
          category: true,
          analytic: true,
          specialization: true,
          syllabus: true,
          faq: true,
        },
        where: {
          id: _id,
        },
      });
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getTotalLengthCourses(): Promise<number> {
    const response = await this.coursesRepository.count();
    console.log(response);

    return response;
  }

  async getCoursesLimit(_limit: number): Promise<Courses[] | Courses> {
    const response = await this.coursesRepository.find({
      relations: {
        analytic: true,
        category: true,
      },
      order: {
        id: "ASC",
        analytic: {
          viewCount: "ASC",
        },
      },
      take: _limit,
    });
    return response;
  }

  async getCourseById(_id): Promise<Courses> {
    const response = await this.coursesRepository.findOne({
      relations: {
        rating: true,
        analytic: true,
        category: true,
      },
      where: {
        id: _id,
      },
    });
    return response;
  }

  getCoursesRepository(): Repository<Courses> {
    return this.coursesRepository;
  }

  async createCourse(course: CreateCourseDto): Promise<boolean> {
    this.logger.log("Parameters", {
      course,
    });
    try {
      this.logger.log("Start created object Course");
      this.logger.log("Start created object Analytic");
      this.logger.log("Start created object Videos");
      const newCourse = new Courses();
      const newAnalytic = new Analytic();

      let isCheckedSaveCourse: Courses;
      let isCheckedSaveAnalytic: Analytic;

      isCheckedSaveCourse = await this.saveCourse(
        newCourse,
        course,
        isCheckedSaveCourse,
      );
      this.logger.log("SAVE Course successfully saved");
      isCheckedSaveAnalytic = await this.saveAnalytic(
        newAnalytic,
        isCheckedSaveAnalytic,
      );

      this.logger.log("SAVE Analytic successfully saved");
      this.logger.log("SAVE Relationship");
      this.logger.log({
        isCheckedSaveCourse,
        isCheckedSaveAnalytic,
      });
      isCheckedSaveCourse.analytic =
        isCheckedSaveAnalytic.id as unknown as Analytic;

      isCheckedSaveAnalytic.course =
        isCheckedSaveCourse.id as unknown as Courses;

      await this.coursesRepository.save(isCheckedSaveCourse);
      await this.analyticService
        .getAnalyticsRepository()
        .save(isCheckedSaveAnalytic);

      this.logger.log("SAVE Relationship successfully saved");
      this.logger.log("Response");
      return true;
    } catch (error) {
      this.logger.log(error);
      return false;
    }
  }

  async saveCourse(
    newCourse: Courses,
    createDto: CreateCourseDto,
    isCheckedSave: Courses,
  ) {
    newCourse.title = createDto.title;
    newCourse.description = createDto.description;
    newCourse.overviews = createDto.overviews;
    newCourse.thumbnailUrl = createDto.thumbnailUrl;
    newCourse.oddPrice = createDto.oddPrice;
    newCourse.newPrice = createDto.newPrice;
    isCheckedSave = await this.coursesRepository.save(newCourse);
    this.exceptionFalseSave(isCheckedSave);
    return isCheckedSave;
  }

  async saveAnalytic(newObject: Analytic, isCheckedSave: Analytic) {
    newObject.bookingCount = 0;
    newObject.videoCount = 0;
    newObject.viewCount = 0;
    newObject.watchTime = 0;
    isCheckedSave = await this.analyticService
      .getAnalyticsRepository()
      .save(newObject);
    this.exceptionFalseSave(isCheckedSave);
    return isCheckedSave;
  }

  exceptionFalseSave(isCheckedSave: Courses | Analytic) {
    if (
      Object.keys(isCheckedSave).length === 0 &&
      isCheckedSave.constructor === Object
    )
      throw new BadRequestException("Have error when saving");
  }
}
