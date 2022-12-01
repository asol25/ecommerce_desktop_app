import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import configuration from "src/config/configuration";
import { DataSource } from "typeorm";
import { AccountsModule } from "./accounts/accounts.module";
import { Accounts } from "./accounts/entity/accounts.entity";
import { Roles } from "./accounts/entity/roles.entity";
import { AnalyticsModule as AnalyticModule } from "./analytic/analytic.module";
import { Analytic } from "./analytic/entity/analytic.entity";
import { AreaModule } from "./area/area.module";
import { Area } from "./area/entities/area.entity";
import { AuthModule } from "./auth/auth.module";
import { CategoriesModule } from "./categorys/categories.module";
import { Categories } from "./categorys/entity/categories.entity";
import { CommencesModule } from "./comments/commentes.module";
import { Comments } from "./comments/entity/comments.entity";
import { CountryModule } from "./country/country.module";
import { CoursesModule } from "./courses/courses.module";
import { Courses } from "./courses/entity/courses.entity";
import { FAQ } from "./courses/entity/fqa.entity";
import { Specialization } from "./courses/entity/specialization.entity";
import { Syllabus } from "./courses/entity/syllabus.entity";
import { ExampleModule } from "./example/example.module";
import { Orders } from "./orders/entity/orders.entity";
import { OrdersModule } from "./orders/orders.module";
import { PaymentModule } from "./payment/payment.module";
import { Rating } from "./ratings/entity/rating.entity";
import { StreamModule } from "./stream/stream.module";
import { Videos } from "./videos/entity/video.entity";
import { VideosModule } from "./videos/videos.module";
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
      password:
        "f934cb6efe435ab61b7e77cd4bbd8f25972317f6e2c32edf0146c5babd971e2f",
      database: "d9kfdardffs6dv",
      entities: [
        Accounts,
        Roles,
        Categories,
        Rating,
        Orders,
        Courses,
        Videos,
        Analytic,
        Comments,
        Area,
        Syllabus,
        FAQ,
        Specialization,
      ],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule,
    CoursesModule,
    AccountsModule,
    CategoriesModule,
    VideosModule,
    StreamModule,
    CommencesModule,
    AnalyticModule,
    OrdersModule,
    AreaModule,
    CountryModule,
    ExampleModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
