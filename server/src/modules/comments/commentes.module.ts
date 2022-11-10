import { Module } from '@nestjs/common';
import { CommentesService } from './commentes.service';
import { CommentesController } from './commentes.controller';

@Module({
  providers: [CommentesService],
  controllers: [CommentesController]
})
export class CommentesModule {}
