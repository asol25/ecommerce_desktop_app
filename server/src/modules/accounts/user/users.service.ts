import { Accounts } from "./../entity/accounts.entity";
import { DataSource, DeepPartial, Repository } from "typeorm";
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class UsersService {
  logger: Logger;
  constructor(
    @InjectRepository(Accounts)
    @Inject(forwardRef(() => AuthService))
    private accountsRepository: Repository<Accounts>,
    private dataSource: DataSource,
    private authService: AuthService,
  ) {
    this.logger = new Logger(UsersService.name);
  }

  async findAll({ page }): Promise<Accounts[]> {
    this.logger.log("Param", {
      page,
    });
    try {
      const skip = Number(page) === 0 ? 0 : Number(page + 1) + 24;
      const take = skip + 25;

      this.logger.log("Start found user from Accounts Entities");
      const response = await this.dataSource.getRepository(Accounts).find({
        relations: {
          role: true,
        },
      });

      if (!response)
        throw new NotFoundException("The action was not found users");

      this.logger.log("Response Account Entities");
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async setToken(access_token, refresh_token, _password) {
    console.log({
      access_token: access_token,
      refresh_token: refresh_token,
      password: _password,
    });

    try {
      const user = await this.dataSource
        .getRepository(Accounts)
        .createQueryBuilder("account")
        .update(Accounts)
        .set({
          accessToken: access_token,
          refreshToken: refresh_token,
        })
        .where("refreshToken = :refreshToken OR password = :password", {
          refreshToken: refresh_token,
          password: _password,
        })
        .execute();

      return user.affected ? true : false;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findOne(_username: string): Promise<Accounts> {
    this.logger.log("The Param #_username is already at UsersService", {
      _username,
    });

    if (!_username) {
      throw new Error("Miss _username");
    }
    try {
      this.logger.log("Start found user");
      const response = await this.dataSource.getRepository(Accounts).find({
        where: {
          username: _username,
        },
      });
      if (!response)
        throw new NotFoundException(`The action find #${_username} invalid`);

      this.logger.log("The Result already response", response);
      return response as unknown as Promise<Accounts>;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async deleteOne({ _id, page, status }): Promise<Accounts[] | string> {
    this.logger.log("The Param is already at UsersService", {
      _id,
      page,
      status,
    });
    let isStatus;
    status !== "false" ? (isStatus = "active") : (isStatus = "banned");

    try {
      this.logger.log(`Start ban user in Accounts Entities #id: ${_id}`);
      this.logger.log(`Update user`);
      const user = await this.dataSource
        .createQueryBuilder()
        .update(Accounts)
        .set({
          status: isStatus,
        })
        .where("id = :id", { id: _id })
        .execute();
      this.logger.log(`Ban user in Accounts Entities #id: ${_id}`);
      this.logger.log(`Start getUsers`);
      const response = await this.findAll({ page: page });
      this.logger.log("Response successfully from Accounts Entities");
      return response;
    } catch (error) {
      this.logger.error(error || error.message?.data || error.data?.message);
    }
  }

  async createUser(options): Promise<Accounts[]> {
    try {
      let {
        username,
        password,
        email,
        verified,
        status,
        page,
        given_name,
        nickname,
        picture,
        locale,
        update_at,
        email_verified,
        sub,
      } = options;

      this.logger.log("The Params are: " + JSON.stringify({ options }));
      this.logger.log("Start checked user exist");
      const user = await this.accountsRepository.findOneBy({ email: email });
      if (user) {
        this.logger.error("Don't crated new user because it already exists");
        return;
      }

      if (!page) {
        page = 0;
      }

      this.logger.log("User not exist");
      const newRow = this.accountsRepository.create({
        username: username || given_name,
        password: password,
        email: email,
        verified: verified || email_verified,
        status: "active",
        picture: picture,
        sub: sub,
        locale: locale,
        role: 4 as DeepPartial<Accounts>,
      });
      this.logger.log("Start created new User", {
        newRow,
      });

      const response = await this.accountsRepository.insert(newRow);
      if (!response)
        throw new BadRequestException("The action created have failed");

      this.logger.log("The Result from insert was: ", {
        response: response.raw,
      });

      this.logger.log("Start found users");
      const found = await this.findAll({ page: page });
      this.logger.log("The Result is already response: ", {
        found,
      });
      return found;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getCountUsers(): Promise<number> {
    const userCount = await this.accountsRepository.countBy({
      role: {
        id: 4,
      },
    });

    return userCount;
  }
}
