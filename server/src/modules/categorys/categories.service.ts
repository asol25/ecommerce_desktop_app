import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categories } from "./entity/categories.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categorysRepository: Repository<Categories>,
  ) {}

  async find(): Promise<Categories[]> {
    const response = await this.categorysRepository.find();
    return response;
  }

  async findOneById(id: number) {
    try {
      const response = await this.categorysRepository.findOneBy({ id: id });
      if (!response) {
        throw new NotFoundException(`The active find a #${id} does not exist`);
      }
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async deleteOneById({ id }): Promise<boolean> {
    const response = await this.categorysRepository.delete(id);
    return response.affected ? true : false;
  }
}
