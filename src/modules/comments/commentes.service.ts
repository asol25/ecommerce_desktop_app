import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Accounts } from "../accounts/entity/accounts.entity";
import { Videos } from "../videos/entity/video.entity";
import { Comments } from "./entity/comments.entity";

@Injectable()
export class CommencesService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
  ) {}

  async getComments(id: number): Promise<Comments[]> {
    try {
      const response = await this.commentsRepository.find({
        relations: {
          account: true,
        },
        where: {
          video: {
            id: id,
          },
        },
      });

      if (!response)
        throw new NotFoundException(`The active get comments #${id} invalid`);
      console.log(response);

      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async createComment(videoId: number, message: string, userId: number) {
    const newComment = new Comments();
    newComment.comment = message;
    newComment.account = userId as unknown as Accounts;
    newComment.video = videoId as unknown as Videos;
    const comment = await this.commentsRepository.insert(newComment);
    return comment.raw;
  }
}
