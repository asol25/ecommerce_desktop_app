import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) { }

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Get(':id')
  async findAll(@Param() params) {
    const { id } = params;
    return this.videosService.findAll(id);
  }

  @Get('courseVideo/:id')
  findOne(@Param('id') params) {
    const { id } = params;
    return this.videosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete('courseVideo/:id')
  remove(@Param('id') params) {
    const { id } = params;
    return this.videosService.remove(id);
  }
}
