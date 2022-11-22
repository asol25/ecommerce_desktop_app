import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';

@Controller('')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  
  @Get()
  findAll() {
    return this.exampleService.findAll();
  }
}
