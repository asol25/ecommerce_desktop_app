import { Categorys } from './type';
import { CategorysService } from './categorys.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categorys')
export class CategorysController {
    constructor(private categoryServices: CategorysService) {}

    @Get()
    async findAll(): Promise<Categorys[]> {
        return await this.categoryServices.find();
    }
    
    @Post(":id")
    async findOneById(@Param() params) {
        return await this.categoryServices.findOneById(params);
    }
}
