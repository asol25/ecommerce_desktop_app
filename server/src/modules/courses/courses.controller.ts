import { CoursesService } from './courses.service';
import { Controller, Get } from '@nestjs/common';
import { Courses } from './entity/courses.entity';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService) { }

    @Get()
    async findAll(): Promise<Courses[]> {
        return await this.coursesService.findAll();
    }
}
