import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>
  ) { }

  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all country`;
  }

  async getAnalyticCountCities() {
    const response = await this.countryRepository.createQueryBuilder('country')
      .loadRelationCountAndMap('country.value', 'country.accounts')
      .getMany()

    return response;
  }
  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
