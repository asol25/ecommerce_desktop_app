import { Courses } from "./../courses/entity/courses.entity";
import { Videos } from "./entity/video.entity";
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video.dto";
import { UpdateVideoDto } from "./dto/update-video.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as fs from "fs";
import { Analytic } from "../analytic/entity/analytic.entity";
@Injectable()
export class VideosService {
  logger: Logger;
  constructor(
    @InjectRepository(Videos)
    private videosRepository: Repository<Videos>,
  ) {
    this.logger = new Logger(VideosService.name);
  }
  create(_createVideoDto: CreateVideoDto) {
    return "This action adds a new video";
  }

  async findAll(id: number) {
    try {
      this.logger.log(`This action returns all #${id} video`);
      const response = await this.videosRepository.find({
        where: {
          course: {
            id: id,
          },
        },
        order: {
          id: "ASC",
        },
      });
      return response;
    } catch (error) {
      this.logger.error(error.message);
    }
  }

  async getVideoPathById(id: string): Promise<string> {
    try {
      const video = await this.videosRepository.findOneBy({
        id: id as unknown as number,
      });
      if (!video) {
        throw new NotFoundException(`Video with id ${id} is not existed`);
      }

      const url = video.videoUrl;

      if (!url || url === "") {
        throw new NotFoundException(
          `Video with id ${id} does not have a valid url`,
        );
      }

      return url;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  getVideoSizeByPath(_path: string): number | undefined {
    try {
      const path =
        "C:/Users/Thinh/Desktop/ecommerce_exe_app/ecommerce_desktop_app/server/src/modules/videos/entity/314991201_6440002129365721_7220200907466328562_n.mp4";
      return fs.statSync(path).size;
    } catch (error) {
      this.logger.error(error.message);
      return undefined;
    }
  }

  async findOne(id: number) {
    try {
      this.logger.log(`This action returns a #${id} video`);
      const response = await this.videosRepository.findOneBy({ id: id });

      if (!response) {
        throw new NotFoundException(
          `Video with id ${id} does not have invalid`,
        );
      }

      return response;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  getVideoStream(path: string, start: number, end: number) {
    try {
      return fs.createReadStream(path, { start, end });
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  update(id: number, _updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  async createVideo(video: CreateVideoDto, _id: number): Promise<boolean> {
    this.logger.log("createVideo", {
      video,
      _id,
    });

    try {
      this.logger.log("Start creating video");
      const newVideo = new Videos();
      let isCheckedSaveNewVideo: Videos;
      newVideo.videoUrl = video.videoUrl;
      newVideo.title = video.title;
      newVideo.thumbanailUrl = video.thumbanailUrl;
      newVideo.description = video.description;

      isCheckedSaveNewVideo = await this.videosRepository.save(newVideo);
      if (isCheckedSaveNewVideo.description !== video.description)
        throw new BadRequestException("Have error saving video");

      this.logger.log("Save video successfully");
      this.logger.log(`Start update #courseId: #${_id}`);
      isCheckedSaveNewVideo.course = _id as unknown as Courses;
      isCheckedSaveNewVideo.analytic =
        isCheckedSaveNewVideo.course as unknown as Analytic;
      await this.videosRepository.save(isCheckedSaveNewVideo);
      this.logger.log(`Save#courseId: #${_id} video successfully`);
      this.logger.log("Response");
      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async remove(id: number) {
    try {
      this.logger.log(`This action removes a #${id} video`);
      const response = await this.videosRepository.delete({ id: id });

      if (!response.affected) {
        throw new BadRequestException(`Have error deleting video ${id}`);
      }

      return response;
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  getVideosRepository() {
    return this.videosRepository;
  }
}
