import { VideosModule } from './../videos/videos.module';
import { Module } from '@nestjs/common';
import { StreamController } from './stream.controller';

@Module({
  imports: [VideosModule],
  controllers: [StreamController],
  providers: [VideosModule]
})  
export class StreamModule {}
