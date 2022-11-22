import { Test, TestingModule } from '@nestjs/testing';
import { CommentesController } from './commentes.controller';

describe('CommentesController', () => {
  let controller: CommentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentesController],
    }).compile();

    controller = module.get<CommentesController>(CommentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
