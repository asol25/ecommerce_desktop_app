import { DataSource, FindOptionsWhere } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { optionsFindOneAccount } from '../type';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource
  ) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(options: optionsFindOneAccount): Promise<User> {
    const { id,
      username,
      password,
      email,
      accessToken,
      refresshToken } = options;
    return await this.usersRepository.findOneBy({ id, username, password, email, accessToken, refresshToken });
  }

  async deleteOne(id: number | string): Promise<boolean> {
    try {
      const deleteQuery = await this.usersRepository.delete(id);
      return deleteQuery.affected ? true : false;
    } catch (error) {
      console.error(error || error.message?.data || error.data?.message);
    }
  }
}