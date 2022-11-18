import { Accounts } from './../entity/accounts.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    @InjectRepository(Accounts)
    private accountsRepository: Repository<Accounts>,
    private dataSource: DataSource,
    private authService: AuthService,
  ) { }

  async findAll({ page }): Promise<Accounts[]> {
    try {
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

      if (!response)
        throw new NotFoundException("The action was not found users");
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async setToken(access_token, refresh_token, _password) {
    console.log({access_token: access_token, refresh_token: refresh_token, password: _password});
    
    try {
      const user = await this.dataSource.getRepository(Accounts).createQueryBuilder('account')
        .update(Accounts)
        .set({
          accessToken: access_token,
          refreshToken: refresh_token
        })
        .where("refreshToken = :refreshToken OR password = :password", {
          refreshToken: refresh_token,
          password: _password
        })
        .execute()
        
      return user.affected ? true : false;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async findOne(_username): Promise<Accounts> {
    try {
      const response = await this.dataSource.getRepository(Accounts).find({
        where: {
          username: _username
        }
      });
      if (!response)
        throw new NotFoundException(`The action find #${_username} invalid`);

      return (response as unknown as Promise<Accounts>);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
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
    try {
      const { username, password, email, verified, status, page } = options;

      const newRow = this.accountsRepository.create({
        username: username,
        password: password,
        email: email,
        verified: verified,
        status: status,
        role: (4 as DeepPartial<Accounts>)
      })

      const response = await this.accountsRepository.insert(newRow);

      if (!response)
        throw new BadRequestException("The action created have failed");

      if (response.identifiers) {
        return await this.findAll({ page: page });
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async getCountUsers(): Promise<number> {
    const userCount = await this.accountsRepository.countBy({
      role: {
        id: 4
      }
    })

    return userCount
  }
}