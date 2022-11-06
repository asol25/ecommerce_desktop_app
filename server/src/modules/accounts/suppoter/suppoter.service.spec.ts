import { Test, TestingModule } from '@nestjs/testing';
import { SuppoterService } from './suppoter.service';

describe('SuppoterService', () => {
  let service: SuppoterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuppoterService],
    }).compile();

    service = module.get<SuppoterService>(SuppoterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
