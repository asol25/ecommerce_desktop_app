import { AppService } from './example/bootstap/app.service';
import { AppController } from './example/bootstap/app.controller';
import { UsersService } from './user/users.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ExpampleModule } from './example/bootstap';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '01284375954',
    database: 'web2041',
    entities: [],
    synchronize: true,
  }), 
  UsersModule,
  ExpampleModule
],
  // controllers: [],
  // providers: [],
})
export class AppModule { }
