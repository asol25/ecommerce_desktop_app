import { VideosService } from './../videos/videos.service';
import { BadRequestException, Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { generateStreamResponseConfig } from './utils';

@Controller('stream')
export class StreamController {
  constructor(
    private readonly videosService: VideosService,
  ) { }

  @Get(':id')
  async findAll(  
    @Param('id') id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const range = req.headers.range;
      if (!range) {
        throw new BadRequestException('Requires Range header');
      }

      const videoPath = await this.videosService.getVideoPathById(id);
      const videoSize = this.videosService.getVideoSizeByPath(videoPath);
      console.log(`Video size: ${videoSize}`);

      const { headers, start, end } = generateStreamResponseConfig(
        range,
        videoSize,
      );

      res.writeHead(206, headers);

      const videoStream = this.videosService.getVideoStream(
        videoPath,
        start,
        end,
      );

      videoStream.pipe(res);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
