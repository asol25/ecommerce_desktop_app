import { Courses } from 'src/modules/courses/entity/courses.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses)
        private coursesRepository: Repository<Courses>,
        private dataSource: DataSource
    ){}

    async findAll(): Promise<Courses[]> {
        const response = await this.coursesRepository.find();
        return response;
    }
}
