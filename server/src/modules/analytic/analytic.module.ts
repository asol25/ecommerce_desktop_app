import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticController } from './analytic.controller';
import { Module } from '@nestjs/common';
import { Analytic } from './entity/analytic.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Analytic])],
    controllers: [AnalyticController]
})
export class AnnalyticModule {}
