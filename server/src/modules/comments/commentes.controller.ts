import { Controller, Get, Param } from "@nestjs/common";
import { CommencesService } from "./commentes.service";
import { Comments } from "./entity/comments.entity";

@Controller("commentes")
export class CommencesController {
  constructor(private commentsService: CommencesService) {}

  @Get(":id")
  async getComments(@Param() params): Promise<Comments[]> {
    const { id } = params;
    return await this.commentsService.getComments(id);
  }
}
