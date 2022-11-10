import { AccountDetails } from './entity/accountDetails.entity';
import { Roles } from './entity/roles.entity';
import { AccountsController } from './accounts.controller';
import { Accounts } from './entity/accounts.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tokens } from './entity/tokens.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Tokens, Roles, AccountDetails])],
  controllers: [AccountsController],
  providers: [],
  exports: [],
})
export class AccountsModule {}