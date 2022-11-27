import { CoursesService } from './courses.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService) { }

    @Get()
    async findAll() {
        return await this.coursesService.findAll();
    }

    @Get('limmit/:limmit')
    async getCoursesLimmit(@Param() params) {
        const { limmit } = params;
        return await this.coursesService.getCoursesLimmit(limmit);
    }

    @Get('courseById/:id')
    async getCourseById(@Param() params) {
        const { id } = params;
        return await this.coursesService.getCourseById(id);
    }


    @Get('totalCourseCount')
    async getTotalLengthCourses() {
        return await this.coursesService.getTotalLengthCourses();
    }
}
