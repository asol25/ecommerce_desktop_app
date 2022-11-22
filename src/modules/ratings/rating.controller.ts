import { Controller, Get } from '@nestjs/common';

@Controller('rating')
export class RatingController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}