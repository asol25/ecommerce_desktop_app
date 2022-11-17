import { CoursesService } from './courses.service';
import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService) { }

    @Get()
    async findAll() {
        return await this.coursesService.findAll();
    }

    @Get('totalCourseCount')
    async getTotalLengthCourses() {
        return await this.coursesService.getTotalLengthCourses();
    }
}
