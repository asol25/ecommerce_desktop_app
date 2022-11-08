import { Body, Controller, forwardRef, Get, Inject, Param, Post, Query, Request, UseGuards } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly usersService: UsersService) { }

    @Get()
    async findAll(@Param() params, @Query() query): Promise<User[]> {
        console.log(query);
        return await this.usersService.findAll(query);
    }

    @Post(":key")
    async findOne(@Param() params) {
        return await this.usersService.findOne(params);
    }

    @Post("delete/:id")
    async deleteOne(@Param() params) {
        return await this.usersService.deleteOne(params);
    }
}
