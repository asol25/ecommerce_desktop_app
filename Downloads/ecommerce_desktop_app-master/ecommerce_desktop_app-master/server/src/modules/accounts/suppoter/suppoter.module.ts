import { Suppoter } from './entity/suppoter.entity';
import { Module } from '@nestjs/common';
import { SuppoterController } from './suppoter.controller';
import { SuppoterService } from './suppoter.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Suppoter])],
  controllers: [SuppoterController],
  providers: [SuppoterService],
  exports: [SuppoterService]
})
export class SuppoterModule {}
