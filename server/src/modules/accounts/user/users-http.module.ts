import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UserController]
})
export class UserHttpModule {}
