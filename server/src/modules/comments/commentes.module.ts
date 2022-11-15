import { Module } from '@nestjs/common';
import { CommentesService } from './commentes.service';
import { CommentesController } from './commentes.controller';
import { Comments } from './entity/comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  providers: [CommentesService],
  controllers: [CommentesController]
})
export class CommentesModule {}
