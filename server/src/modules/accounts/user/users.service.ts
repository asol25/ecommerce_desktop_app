import { Accounts } from './../entity/accounts.entity';
import { createQueryBuilder, DataSource, EqualOperator, FindOperator, FindOptionsWhere, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from '../entity/roles.entity';
'../type';

enum UserEnum {
  USER = 4,
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Accounts)
    private accountsRepository: Repository<Accounts>,
    private dataSource: DataSource
  ) { }

  async findAll({ page }): Promise<Accounts[]> {
    const ROWN_NUMBER = 24;
    const skip = Number(page) === 0 ? 0 : Number(page) + ROWN_NUMBER;
    const take = skip + ROWN_NUMBER;

    const response = await this.dataSource.getRepository(Accounts).find({
      relations: {
        role: true,
      },
      where: {
        role: {
          id: 4,
          name: "user",
        },
      },
      skip: skip,
      take: take,
    })
    return response;
  }

  async findOne({ id }): Promise<Accounts> {
    const response = await this.dataSource.getRepository(Accounts).find({
      where: {
        id: id,
      }
    })

    return (response as unknown as Promise<Accounts>);
  }

  async deleteOne({ id }): Promise<boolean> {
    try {
      const deleteQuery = await this.accountsRepository.delete(id);
      return deleteQuery.affected ? true : false;
    } catch (error) {
      console.error(error || error.message?.data || error.data?.message);
    }
  }
}