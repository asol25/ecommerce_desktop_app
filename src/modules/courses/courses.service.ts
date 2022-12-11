import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Analytic } from "../analytic/entity/analytic.entity";
import { Categories } from "../categorys/entity/categories.entity";
import { Rating } from "../ratings/entity/rating.entity";
import { RatingService } from "../ratings/rating.service";
import { AnalyticsService } from "./../analytic/analytic.service";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Courses } from "./entity/courses.entity";

@Injectable()
export class CoursesService {
  logger: Logger;
  constructor(
    @InjectRepository(Courses)
    private coursesRepository: Repository<Courses>,
    private analyticService: AnalyticsService,
    @Inject(forwardRef(() => RatingService))
    private ratingService: RatingService,
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
      const newCourse = new Courses();
      const newAnalytic = new Analytic();
      const newRating = new Rating();

      let isCheckedSaveCourse: Courses;
      let isCheckedSaveAnalytic: Analytic;
      let isCheckedSaveRating: Rating;

      isCheckedSaveCourse = await this.saveCourse(
        newCourse,
        course,
        isCheckedSaveCourse,
      );
      isCheckedSaveAnalytic = await this.saveAnalytic(
        newAnalytic,
        isCheckedSaveAnalytic,
      );

      isCheckedSaveRating = await this.saveRating(
        newRating,
        isCheckedSaveRating,
      );
      this.logger.log({
        isCheckedSaveCourse,
        isCheckedSaveAnalytic,
      });

      isCheckedSaveCourse.analytic =
        isCheckedSaveAnalytic.id as unknown as Analytic;

      isCheckedSaveAnalytic.course =
        isCheckedSaveCourse.id as unknown as Courses;

      isCheckedSaveCourse.rating = isCheckedSaveRating.id as unknown as Rating;

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
    newCourse.category = createDto.category as unknown as Categories;
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

  async saveRating(newObject: Rating, isCheckedSave: Rating) {
    newObject.flag = 0;
    newObject.love = 0;
    newObject.star = 0;
    newObject.like = 0;
    isCheckedSave = await this.ratingService
      .getRatingResponse()
      .save(newObject);
    this.exceptionFalseSave(isCheckedSave);
    return isCheckedSave;
  }

  exceptionFalseSave(isCheckedSave: Courses | Analytic | Rating) {
    if (
      Object.keys(isCheckedSave).length === 0 &&
      isCheckedSave.constructor === Object
    )
      throw new BadRequestException("Have error when saving");
  }
}
