import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly usersService: UsersService) { }

    @Get("countUsers")
    async getCountUsers(@Param() params) {
        return await this.usersService.getCountUsers();
    }
    @Get(":page")
    async findAll(@Param() params) {
        return await this.usersService.findAll(params);
    }

    @Post("findOne/:username")
    async findOne(@Param() params) {
        const { username } = params;
        return await this.usersService.findOne(username);
    }

    @Put("create")
    async creteUser(@Body() body) {
        console.log(body);
        return await this.usersService.createUser(body);
    }

    @Delete("delete/:id/page/:page")
    async deleteOne(@Param() params) {
        return await this.usersService.deleteOne(params);
    }
}
