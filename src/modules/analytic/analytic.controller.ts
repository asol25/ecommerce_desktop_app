import { ApiTags } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { AnalyticsService } from "./analytic.service";

@ApiTags("analytic")
@Controller("analytic")
export class AnalyticsController {
  constructor(private analyticsServices: AnalyticsService) {}

  @Get()
  async findAll() {
    return await this.analyticsServices.getListInformationAnalytic();
  }
}
function ApiOperation(arg0: { summary: string }) {
  throw new Error("Function not implemented.");
}
