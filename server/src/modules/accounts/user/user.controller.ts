import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly usersService: UsersService) { }

    @Get(":page")
    async findAll(@Param() params) {
        return await this.usersService.findAll(params);
    }

    @Post("findOne/:id")
    async findOne(@Param() params) {
        return await this.usersService.findOne(params);
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
