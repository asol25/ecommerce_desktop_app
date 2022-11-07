import { Mod } from './entity/mod.entity';
import { ModService } from './mod.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('mod')
export class ModController {
    constructor(
        private readonly modService: ModService
    ) { }

    @Get()
    async findAll(): Promise<Mod[]> {
        return await this.modService.findAll();
    }

    @Post()
    async findOne(@Param() params): Promise<Mod> {
        return await this.modService.findOne(params);
    }
}
