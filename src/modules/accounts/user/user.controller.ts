import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("user")
export class UserController {
  logger: Logger;
  constructor(private readonly usersService: UsersService) {
    this.logger = new Logger(UserController.name);
  }

  @Get("countUsers")
  async getCountUsers() {
    this.logger.log("GET countUsers");
    return await this.usersService.getCountUsers();
  }

  @Post("login")
  login(@Body() body) {
    console.log(
      "🚀 ~ file: user.controller.ts:28 ~ UserController ~ login ~ body",
      body,
    );
    return this.usersService.login(body);
  }

  @Get(":page")
  async findAll(@Param() params) {
    this.logger.log("GET :page", { params });
    return await this.usersService.findAll(params);
  }

  @Post("findOne/:username")
  async findOne(@Param() params) {
    const { username } = params;
    this.logger.log("POST #findOne/:username", {
      params,
    });

    return await this.usersService.findOne(username);
  }

  @Put("create")
  async creteUser(@Body() body) {
    this.logger.log("PUT create", {
      body,
    });
    return await this.usersService.createUser(body);
  }

  @Delete("delete/:_id/page/:page/status/:status")
  async deleteOne(@Param() params) {
    this.logger.log("DELETE delete/:id/page/:page", {
      params,
    });
    return await this.usersService.deleteOne(params);
  }
}
