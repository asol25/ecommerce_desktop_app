import { Repository } from 'typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Courses } from './entity/courses.entity';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;
  beforeEach(async () => {
    service = new CoursesService((Courses as unknown as Repository<Courses>));
    controller = new CoursesController(service);
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
      },
      {
        "id": 3,
        "title": "Os with mose",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        "thumbnailUrl": "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/314495926_10228336977227245_5480127814130334302_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=y1h0Ya8izAcAX_41g3u&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfCTrvg0XR_Jfua1-QETmG0MJkFKfJqydWG-9i0aHkM5gg&oe=63732FCD",
        "oddPrice": 7678,
        "newPrice": 5464
      },
      {
        "id": 2,
        "title": "Nodejs with Asol\n",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        "thumbnailUrl": "https://pbs.twimg.com/card_img/1586084593160945665/dU9_rrZh?format=png&name=360x360",
        "oddPrice": 1000,
        "newPrice": 1856
      }];
      jest.spyOn(service, 'findAll').mockImplementation(() => (result as unknown as Promise<Courses[]>));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
