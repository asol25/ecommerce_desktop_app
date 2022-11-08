import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { optionsFindOneAccount } from '../type';
import { Mod } from './entity/mod.entity';

@Injectable()
export class ModService {
    constructor(
        @InjectRepository(Mod)
        private usersRepository: Repository<Mod>,
    ) { }

    async findAll(): Promise<Mod[]> {
        return await this.usersRepository.find();
    }

    async findOne(options: optionsFindOneAccount): Promise<Mod> {
        const { id,
            username,
            password,
            email,
            accessToken,
            refresshToken } = options;
        return await this.usersRepository.findOneBy({ id, username, password, email, accessToken, refresshToken });
    }
    }
