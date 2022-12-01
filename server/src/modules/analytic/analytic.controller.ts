import { Controller, Get } from "@nestjs/common";
import { AnalyticsService } from "./analytic.service";

@Controller("analytic")
export class AnalyticsController {
  constructor(private analyticsServices: AnalyticsService) {}

  @Get()
  async findAll() {
    return await this.analyticsServices.getListInformationAnalytic();
  }
}
