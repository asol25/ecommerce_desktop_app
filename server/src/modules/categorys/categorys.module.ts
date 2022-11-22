import { CategorysService } from './categorys.service';
import { Module } from '@nestjs/common';
import { CategorysController } from './categorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorys } from './entity/categorys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categorys])],
  controllers: [CategorysController],
  providers: [CategorysService],
})
export class CategorysModule {}
