import { Controller, forwardRef, Get, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }
}
