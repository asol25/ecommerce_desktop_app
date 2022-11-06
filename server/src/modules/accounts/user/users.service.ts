import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

type optionsFindOneUser = {
  id?: number;
  username?: string;
  password?: string;
  email?: string
  accessToken?: string
  refresshToken?: string
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(options: optionsFindOneUser): Promise<User> {
    const { id,
      username,
      password,
      email,
      accessToken,
      refresshToken } = options;
    return await this.usersRepository.findOneBy({ id, username, password, email, accessToken, refresshToken });
  }
}