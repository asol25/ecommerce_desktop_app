import { Accounts } from './../entity/accounts.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    const skip = Number(page) === 0 ? 0 : Number(page + 1) + 24;
    const take = skip + 25;
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

  async deleteOne({ id, page }): Promise<Accounts[] | string> {
    try {
      const deleteQuery = await this.accountsRepository.delete(id);
      if (deleteQuery.affected) {
        const response = await this.findAll({ page: page });
        return response;
      }

      return "Error delete Account User";
    } catch (error) {
      console.error(error || error.message?.data || error.data?.message);
    }
  }

  async createUser(options): Promise<Accounts[] | string> {
    const { username, password, email, verified, status, page} = options;
    
    const newRow = this.accountsRepository.create({
      username: username,
      password: password,
      email: email,
      verified: verified,
      status: status,
      role: (4 as DeepPartial<Accounts>)
    })

    const response = await this.accountsRepository.insert(newRow);

    if (response.identifiers) {
      return await this.findAll({ page: page });
    }
    return "Error create Account User";
  }
}