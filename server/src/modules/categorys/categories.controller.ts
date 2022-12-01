import { Categories } from "./type";
import { CategoriesService } from "./categories.service";
import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller("categorys")
export class CategoriesController {
  constructor(private categoryServices: CategoriesService) {}

  @Get()
  async findAll(): Promise<Categories[]> {
    return await this.categoryServices.find();
  }

  @Get(":id")
  async findOneById(@Param() params) {
    try {
      const { id } = params;
      return await this.categoryServices.findOneById(id);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
