import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { Videos } from './entity/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videos])],
  controllers: [VideosController],
  providers: [VideosService],
  exports: [VideosService]
})
export class VideosModule { }
