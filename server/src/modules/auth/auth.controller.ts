import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { RefreshTokenAuthGuard } from "./guards/refreshToken-auth.guard";
import { FacebookAuthGuard } from "./guards/facebook-auth.gurard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(FacebookAuthGuard)
  @Get("facebook")
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @UseGuards(FacebookAuthGuard)
  @Get("facebook/redirect")
  async facebookLoginRedirect(@Req() req): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req, @Body() body) {
    return this.authService.login(body);
  }

  @Post("register")
  async register(@Body() body) {
    return this.authService.register(body);
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Get("refreshToken")
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @Post("login/auth0")
  Auth(@Body() body) {
    return this.authService.createUser(body);
  }
}
