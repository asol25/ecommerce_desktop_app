import { Videos } from './videos/entity/video.entity';
import { Courses } from './courses/entity/course.entity';
import { Orders } from './orders/entity/orders.entity';
import { Roles } from './accounts/entity/roles.entity';
import { Tokens } from './accounts/entity/tokens.entity';
import { Accounts } from './accounts/entity/accounts.entity';
import { Rating } from './ratings/entity/rating.entity';
import configuration from "src/config/configuration"
import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./accounts/user/users.module";
import { DataSource } from "typeorm";
import { Categorys } from './categorys/entity/categorys.entity';
import { CategorysModule } from './categorys/categorys.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountDetails } from './accounts/entity/accountDetails.entity';
import { Analytic } from './analytic/entity/analytic.entity';
import { Comments } from './comments/entity/comments.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASS || "01284375954",
      database: process.env.DATABSE_NAME || "web2041",
      entities: [Accounts, Tokens, Roles, Categorys, Rating, AccountDetails, Orders, Courses, Videos, Analytic, Comments],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AccountsModule,
    UsersModule,
    CategorysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log(process.env.PORT);

  }
}