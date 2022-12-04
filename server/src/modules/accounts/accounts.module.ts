import { Roles } from "./entity/roles.entity";
import { Accounts } from "./entity/accounts.entity";
import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user/user.controller";
import { UsersService } from "./user/users.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Accounts, Roles]),
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class AccountsModule {}
