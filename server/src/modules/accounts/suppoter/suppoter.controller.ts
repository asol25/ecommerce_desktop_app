import { Suppoter } from './entity/suppoter.entity';
import { SuppoterService } from './suppoter.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('suppoter')
export class SuppoterController {
    constructor(
        private readonly suppoterService: SuppoterService) { }

    @Get()
    async findAll(): Promise<Suppoter[]> {
        return await this.suppoterService.findAll();
    }

    @Post(":key")
    async findOne(@Param() params) {
        return await this.suppoterService.findOne(params);
    }
}
