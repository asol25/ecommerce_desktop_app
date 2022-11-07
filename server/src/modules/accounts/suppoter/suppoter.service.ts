import { Suppoter } from './entity/suppoter.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { optionsFindOneAccount } from '../type';

@Injectable()
export class SuppoterService {
    constructor(
        @InjectRepository(Suppoter)
        private suppoterRepository: Repository<Suppoter>,
      ) {}

    async findAll() : Promise<Suppoter[]> {
        return this.suppoterRepository.find();
    }

    async findOne(options: optionsFindOneAccount): Promise<Suppoter> {
        const { id,
          username,
          password,
          email,
          accessToken,
          refresshToken } = options;
        return await this.suppoterRepository.findOneBy({ id, username, password, email, accessToken, refresshToken });
      }
}
