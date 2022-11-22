import { Controller, Get, Param } from '@nestjs/common';
import { CommentesService } from './commentes.service';
import { Comments } from './entity/comments.entity';

@Controller('commentes')
export class CommentesController {
    constructor(private commentsService: CommentesService) { }

    @Get(':id')
    async getComments(@Param() params): Promise<Comments[]> {
        const { id } = params;
        return await this.commentsService.getComments(id);
    }
}
