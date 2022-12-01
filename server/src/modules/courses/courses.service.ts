import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Courses } from "./entity/courses.entity";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private coursesRepository: Repository<Courses>,
  ) {}

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
      console.error(error.message);
    }
  }

  async getTotalLengthCourses(): Promise<number> {
    const response = await this.coursesRepository.count();
    console.log(response);

    return response;
  }

  async getCoursesLimmit(_limit): Promise<Courses[] | Courses> {
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
}
