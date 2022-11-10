import { Test, TestingModule } from '@nestjs/testing';
import { AnnalyticController } from './annalytic.controller';

describe('AnnalyticController', () => {
  let controller: AnnalyticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnalyticController],
    }).compile();

    controller = module.get<AnnalyticController>(AnnalyticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
