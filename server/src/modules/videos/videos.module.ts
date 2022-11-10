import { VideosController } from './videos.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [VideosController]
})
export class VideosModule {}
