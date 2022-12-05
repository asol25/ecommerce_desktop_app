import { Test, TestingModule } from "@nestjs/testing";
import { CommencesController } from "./commentes.controller";

describe("CommentesController", () => {
  let controller: CommencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommencesController],
    }).compile();

    controller = module.get<CommencesController>(CommencesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
