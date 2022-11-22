import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticController } from './analytic.controller';
import { Module } from '@nestjs/common';
import { Analytic } from './entity/analytic.entity';
import { AnnalyticService } from './analytic.service';

@Module({
    imports: [TypeOrmModule.forFeature([Analytic])],
    controllers: [AnalyticController],
    providers: [AnnalyticService]
})
export class AnnalyticModule {}
