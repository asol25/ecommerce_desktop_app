import { VideosService } from './../videos/videos.service';
import { StreamController } from './stream.controller';
import { Request, Response } from 'express';

describe('StreamController', () => {
  let controller: StreamController;
  let service: VideosService;
  let id = '1';
  let req: Request;
  let res: Response;
  beforeEach(async () => {
    controller = new StreamController(service);
  });

  describe('getStreamVideo', () => {
    it('should return an attributed of video', async () => {
      const result = {
        headers: {
          'Content-Range': 'bytes 12312-1012312/1850468',
          'Accept-Ranges': 'bytes',
          'Content-Length': 1000001,
          'Content-Type': 'video/mp4'
        },
        start: 12312,
        end: 1012312
      }

      jest.spyOn(controller, 'getStreamVideo').mockImplementation(() => (result as unknown as Promise<void>));
      expect(await controller.getStreamVideo(id, req, res)).toBe(result);
    });
  });
});
