import { Videos } from './entity/video.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
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
    try {
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
    } catch (error) {
      console.error(error.message);
    }
  }

  async getVideoPathById(id: number ): Promise<string> {
    try {
      const video = await this.videosRepository.findOneBy({id: id});
      if (!video) {
        throw new NotFoundException(`Video with id ${id} is not existed`);
      }

      const url = video.videoUrl;

      if (!url || url === '') {
        throw new NotFoundException(
          `Video with id ${id} does not have a valid url`,
        );
      }

      return url;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  getVideoSizeByPath(path: string): number | undefined {
    try {

      const path = "C:/Users/Thinh/Desktop/ecommerce_exe_app/ecommerce_desktop_app/server/src/modules/videos/entity/314991201_6440002129365721_7220200907466328562_n.mp4";
      return fs.statSync(path).size;
    } catch (error) {
      console.error(error.message);
      return undefined;
    }
  }
  async findOne(id: number) {
    try {
      console.log(`This action returns a #${id} video`);
      const response = await this.videosRepository.findOneBy({ id: id });

      if (!response) {
        throw new NotFoundException(
          `Video with id ${id} does not have invalid`,
        );
      }

      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  getVideoStream(path: string, start: number, end: number) {
    try {
      return fs.createReadStream(path, { start, end });
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  async remove(id: number) {
    try {
      console.log(`This action removes a #${id} video`);
      const response = await this.videosRepository.delete({ id: id });

      if (!response.affected) {
        throw new Error(
          `Have error deleting video ${id}`,
        );
      }

      return response;
    } catch (error) {
      console.error(error.message);
    }
  }
}
