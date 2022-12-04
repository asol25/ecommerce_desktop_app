import { Test, TestingModule } from "@nestjs/testing";
import { CommencesService } from "./commentes.service";

describe("CommentesService", () => {
  let service: CommencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommencesService],
    }).compile();

    service = module.get<CommencesService>(CommencesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
