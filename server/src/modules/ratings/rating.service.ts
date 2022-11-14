import { CoursesService } from './../courses/courses.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './entity/rating.entity';

@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating)
        private ratingRepository: Repository<Rating>,
        private coursesService: CoursesService,
    ) { }

    async getRatingForCourse(id: number) {
        try {
            const response = await this.ratingRepository.findOneBy({ id: id });
            if (!response)
                throw new NotFoundException(`the action getRatingForCourse #${id} invalid`);

            return response;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
}