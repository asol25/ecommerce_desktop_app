import { CoursesService } from "./courses.service";
import { Body, Controller, Get, Param, Put, Query } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("courses")
@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll() {
    return await this.coursesService.findAll();
  }

  @Get("limit/:limit")
  async getCoursesLimit(@Param() params) {
    const { limit: limit } = params;
    return await this.coursesService.getCoursesLimit(limit);
  }

  @Get("courseById")
  async getContentCourses(@Query() query) {
    const { course } = query;
    return await this.coursesService.getContentCourses(course);
  }

  @Get("totalCourseCount")
  async getTotalLengthCourses() {
    return await this.coursesService.getTotalLengthCourses();
  }

  @ApiOperation({ summary: "Create course" })
  @Put("createdCourse")
  createCourse(@Body() course: CreateCourseDto) {
    return this.coursesService.createCourse(course);
  }
}
