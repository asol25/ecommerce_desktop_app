import { Test, TestingModule } from '@nestjs/testing';
import { AnnalyticService } from './analytic.service';

describe('AnnalyticService', () => {
  let service: AnnalyticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnalyticService],
    }).compile();

    service = module.get<AnnalyticService>(AnnalyticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
