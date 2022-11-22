import { CoursesModule } from './courses/courses.module';
import { Videos } from './videos/entity/video.entity';
import { Orders } from './orders/entity/orders.entity';
import { Roles } from './accounts/entity/roles.entity';
import { Accounts } from './accounts/entity/accounts.entity';
import { Rating } from './ratings/entity/rating.entity';
import configuration from "src/config/configuration"
import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { Categorys } from './categorys/entity/categorys.entity';
import { CategorysModule } from './categorys/categorys.module';
import { AccountsModule } from './accounts/accounts.module';
import { Comments } from './comments/entity/comments.entity';
import { Analytic } from './analytic/entity/analytic.entity';
import { Courses } from './courses/entity/courses.entity';
import { VideosModule } from './videos/videos.module';
import { StreamModule } from './stream/stream.module';
import { CommentesModule } from './comments/commentes.module';
import { AnnalyticModule } from './analytic/analytic.module';
import { OrdersModule } from './orders/orders.module';
import { AreaModule } from './area/area.module';
import { Area } from './area/entities/area.entity';
import { CountryModule } from './country/country.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { ExampleModule } from './example/example.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: "ec2-44-206-137-96.compute-1.amazonaws.com",
      port: 5432,
      username: "vivujdpcjlhfzx",
      password: "f934cb6efe435ab61b7e77cd4bbd8f25972317f6e2c32edf0146c5babd971e2f",
      database: "d9kfdardffs6dv",
      entities: [Accounts, Roles, Categorys, Rating, Orders, Courses, Videos, Analytic , Comments, Area],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false
      }
    }),
    AuthModule,
    CoursesModule,
    AccountsModule,
    CategorysModule,
    VideosModule,
    StreamModule,
    CommentesModule,
    AnnalyticModule,
    OrdersModule,
    AreaModule,
    CountryModule,
    ExampleModule,
    PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
