import { jwtConstants } from './constants';
import { AccountsService } from "../accounts/user/users.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: AccountsService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && password === user.password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return await this.getTokens(payload);
  }

  async getTokens(payload: any) {
    const optionForRefreshToken = {
      secret: jwtConstants.secret,
      expiresIn: '7d',
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, optionForRefreshToken),
    ]);
    
    return {
      accessToken,
      refreshToken,
    };
  }

  async register(user: any) {
    const payload = { username: user.username, sub: user.userId, password: user.password };
    const isCheckedExist = await this.validateUser(payload.username, payload.password);
    if (!isCheckedExist)
      return {
        access_token: this.jwtService.sign(payload),
      }

    return {
      status: 200,
      message: "Account has been established in system"
    }
  }

  async refreshToken(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return await this.getTokens(payload);
  }
}
