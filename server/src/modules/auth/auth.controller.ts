import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { RefreshTokenAuthGuard } from './guards/refreshToken-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

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
  async refreshToken(@Body() body) {
    console.log(body);
    
    return this.authService.refreshToken(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
