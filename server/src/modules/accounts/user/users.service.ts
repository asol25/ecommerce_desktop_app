import { Accounts } from './../entity/accounts.entity';
import { DataSource, FindOptionsWhere } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { optionsFindOneAccount } from '../type';


@Injectable()
export class AccountsService {
  constructor(
    private accountsRepository: Repository<Accounts>,
    private dataSource: DataSource
  ) { }

  async findAll(options): Promise<Accounts[]> {
    const { page, order } = options;
    const skip = Number(page) === 0 ? 0 : Number(page + 1) + 4;
    const take = skip + 5;
    return await this.accountsRepository.find({
      order: {
        id: order,
      },
      skip: skip,
      take: take,
    });
  }

  async findOne(options: optionsFindOneAccount): Promise<Accounts> {
    const { id,
      username,
      password,
      email } = options;
    return await this.accountsRepository.findOneBy({ id, username, password, email });
  }

  async deleteOne(params): Promise<boolean> {
    const { id } = params;
    try {
      const deleteQuery = await this.accountsRepository.delete(id);
      return deleteQuery.affected ? true : false;
    } catch (error) {
      console.error(error || error.message?.data || error.data?.message);
    }
  }
}