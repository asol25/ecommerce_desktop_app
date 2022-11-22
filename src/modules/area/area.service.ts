import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './entities/area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>
  ) { }

  async findAll() {
    const response = await this.areaRepository.find();
    return response;
  }

  async getAnalyticCountArea() {
    const response = await this.areaRepository.createQueryBuilder('are')
      .loadRelationCountAndMap('are.value', 'are.accounts')
      .getMany()

      return response;
  }
}
