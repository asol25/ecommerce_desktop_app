import { DataSource, Repository } from 'typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Courses } from './entity/courses.entity';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;
  let dataSource: DataSource;
  beforeEach(async () => {
    controller = new CoursesController(service);
    service = new CoursesService((Courses as unknown as Repository<Courses>), dataSource);
  });

  describe('findAll', () => {
    it('should return an array of courses', async () => {
      const result = [{
        "id": 1,
        "title": "Os with mose",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        "thumbnailUrl": "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj",
        "oddPrice": 9999,
        "newPrice": 1856
      },];
      jest.spyOn(service, 'findAll').mockImplementation(async () => (result as unknown as Promise<Courses[]>));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
