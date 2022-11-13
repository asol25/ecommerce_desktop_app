import { Videos } from './entity/video.entity';
import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Videos)
    private videosRepository: Repository<Videos>,
  ) { }
  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  async findAll(id: number) {
    console.log(`This action returns all #${id} video`);
    const response = await this.videosRepository.find({
      relations: {
        course: false,
      },
      where: {
        course: {
          id: id,
        }
      },
      order: {
        id: "ASC",
      },
    })
    return response;
  }

  async findOne(id: number) {
    console.log(`This action returns a #${id} video`);
    const response = await this.videosRepository.findOneBy({ id: id });
    return response;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  async remove(id: number) {
    console.log(`This action removes a #${id} video`);
    const response = await this.videosRepository.delete({ id: id });
    return response;
  }
}
