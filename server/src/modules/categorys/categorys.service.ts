import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorys } from './entity/categorys.entity';

@Injectable()
export class CategorysService {
    constructor(
        @InjectRepository(Categorys)
        private categorysRepository: Repository<Categorys>,
    ) { }

    async find(): Promise<Categorys[]> {
        const response = await this.categorysRepository.find();
        return response;
    }

    async findOneById({ id }): Promise<Categorys> {
        const response = await this.categorysRepository.findOneBy({ id });
        return response;
    }
    async deleteOneById({ id }): Promise<boolean> {
        const response = await this.categorysRepository.delete(id);
        return response.affected ? true : false;
    }
}
