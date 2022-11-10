import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  // providers: [User],
  // exports: [UsersService],
})
export class UsersModule {}