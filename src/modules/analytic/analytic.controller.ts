import { Controller, Get } from '@nestjs/common';
import { AnnalyticService } from './analytic.service';
import { Analytic } from './entity/analytic.entity';

@Controller('analytic')
export class AnalyticController {
    constructor(private analyticsServices: AnnalyticService) { }

    @Get()
    async findAll() {
        return await this.analyticsServices.getListInformationAnalytic();
    }
}
