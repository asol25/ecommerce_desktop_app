import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { Request } from 'express';
Inject()
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return "Hello World!";
  }

  @Get('wp')
  getTest(): any {
    return this.appService.getWpTest();
  }
}
