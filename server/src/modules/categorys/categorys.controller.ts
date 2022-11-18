import { Categorys } from './type';
import { CategorysService } from './categorys.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { constants } from 'buffer';

@Controller('categorys')
export class CategorysController {
    constructor(private categoryServices: CategorysService) { }

    @Get()
    async findAll(): Promise<Categorys[]> {
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
