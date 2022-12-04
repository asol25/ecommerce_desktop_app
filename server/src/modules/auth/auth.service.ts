import { jwtConstants } from "./constants";
import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../accounts/user/users.service";
import { Accounts } from "../accounts/entity/accounts.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user[0] && password === user[0].password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    const token = await this.getTokens(payload);
    const account = await this.usersService.setToken(
      token.accessToken,
      token.refreshToken,
      payload.password,
    );
    console.log(account);

    if (account) {
      return token;
    }
    return null;
  }

  async register(user: any) {
    const payload = { username: user.username, password: user.password };
    const isCheckedExist = await this.validateUser(
      payload.username,
      payload.password,
    );
    if (!isCheckedExist)
      return {
        access_token: this.jwtService.sign(payload),
      };

    return {
      status: 200,
      message: "Account has been established in system",
    };
  }

  async getTokens(payload: any) {
    const optionForRefreshToken = {
      secret: jwtConstants.secret,
      expiresIn: "7d",
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, optionForRefreshToken),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(user: any) {
    const payload = { username: user.username, password: user.password };

    const token = await this.getTokens(payload);
    const account = await this.usersService.setToken(
      token.accessToken,
      token.refreshToken,
      payload.password,
    );
    if (account) {
      return token;
    }
    return null;
  }

  async createUser(user: any) {
    return this.usersService.createUser(user);
  }
}
