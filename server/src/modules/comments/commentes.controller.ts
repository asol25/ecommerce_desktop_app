import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
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

  @Post("create/:videoId")
  async createComment(@Param() params, @Body() comment) {
    const { videoId } = params;
    const { userId, message } = comment.options;
    console.log({ videoId, userId, message });
    return this.commentsService.createComment(videoId, message, userId);
  }
}
