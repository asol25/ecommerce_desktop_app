import { Roles } from './entity/roles.entity';
import { AccountsController } from './accounts.controller';
import { Accounts } from './entity/accounts.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tokens } from './entity/tokens.entity';
import { UserController } from './user/user.controller';
import { UsersService } from './user/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Tokens, Roles])],
  controllers: [AccountsController, UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class AccountsModule {}