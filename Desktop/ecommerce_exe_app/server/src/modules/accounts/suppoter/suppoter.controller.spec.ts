import { SuppoterService } from './suppoter.service';
import { SuppoterController } from './suppoter.controller';
import { Suppoter } from './entity/suppoter.entity';
import { Repository } from 'typeorm';

describe('SuppoterController', () => {
  let controller: SuppoterController;
  let service: SuppoterService;

  beforeEach(async () => {
    service = new SuppoterService((Suppoter as unknown as Repository<Suppoter>));
    controller = new SuppoterController(service);
  });

  it('should return an array of suppoter', async () => {
    const result = [{
        "id": 1,
        "username": "[value-2]",
        "password": "[value-3]",
        "email": "[value-4]",
        "accessToken": "[value-5]",
        "refresshToken": "[value-6]"
    }];
    
    jest.spyOn(SuppoterController.prototype, "findAll").mockImplementation(async () => await result);
    
    expect(await controller.findAll()).toBe(result);
  });
});
