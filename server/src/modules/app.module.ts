import { Mod } from './accounts/mod/entity/mod.entity';
import { Suppoter } from './accounts/suppoter/entity/suppoter.entity';
import configuration from "src/config/configuration"
import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./accounts/user/users.module";
import { DataSource } from "typeorm";
import { User } from './accounts/user/entity/user.entity';
import { Administrator } from "src/modules/accounts/admin/entity/admin.entity";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASS || "01284375954",
      database: process.env.DATABSE_NAME || "web2041",
      entities: [User, Administrator, Suppoter, Mod],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
