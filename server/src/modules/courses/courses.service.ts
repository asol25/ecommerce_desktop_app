import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './entity/courses.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>,
    ) { }

    async findAll(): Promise<Courses[]> {
        const response = await this.coursesRepository.find({
            relations: {
                rating: true,
                category: true,
            },
        });
        return response;
    }

    async getTotalLengthCourses(): Promise<number> {
        const response = await this.coursesRepository.count();
        console.log(response);
        
        return response;
    }

    async getCoursesLimmit(_limmit): Promise<Courses[] | Courses> {
        const response = await this.coursesRepository.find({
            relations: {
                analytic: true
            },
            order: {
                id: 'ASC',
                analytic: {
                    viewCount: "ASC"
                }
            },
            take: _limmit,
        });
        return response;
    }

    getCoursesRepository(): Repository<Courses> {
        return this.coursesRepository;
    }
}
