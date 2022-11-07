import { Mod } from './entity/mod.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ModController } from './mod.controller';
import { ModService } from './mod.service';


@Module({
  imports: [TypeOrmModule.forFeature([Mod])],
  controllers: [ModController],
  providers: [ModService]
})
export class ModModule {}
