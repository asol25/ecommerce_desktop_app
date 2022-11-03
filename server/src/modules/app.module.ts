import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ExpampleModule } from "./example/bootstap";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./user/users.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "01284375954",
      database: "web2041",
      entities: [],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ExpampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
