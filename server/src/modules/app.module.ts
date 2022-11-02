import { Module } from '@nestjs/common';
import { AuthModule } from './example/bootstap';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
