import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { ExpampleModule } from './example/bootstap';

@Module({
  imports: [AuthModule, ExpampleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
