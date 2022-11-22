import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  findAll() {
    return this.areaService.getAnalyticCountArea();
  }
}
