import { Test, TestingModule } from '@nestjs/testing';
import { SuppoterController } from './suppoter.controller';

describe('SuppoterController', () => {
  let controller: SuppoterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppoterController],
    }).compile();

    controller = module.get<SuppoterController>(SuppoterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
