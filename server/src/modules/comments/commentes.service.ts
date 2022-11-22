import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './entity/comments.entity';

@Injectable()
export class CommentesService {
    constructor(
        @InjectRepository(Comments)
        private videosRepository: Repository<Comments>
    ) { }

    async getComments(id: number): Promise<Comments[]> {
        try {
            const response = await this.videosRepository.find({
                where: {
                    video: {
                        id: id,
                    }
                }
            })

            if (!response)
                throw new NotFoundException(`The active get comments #${id} invalid`);
            console.log(response);
                
            return response;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
}
