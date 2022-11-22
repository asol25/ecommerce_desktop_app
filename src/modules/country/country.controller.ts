import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Get()
  getAnalyticCountCities() {
    return this.countryService.getAnalyticCountCities();
  }
}
