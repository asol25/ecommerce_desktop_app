import { Repository } from 'typeorm';
import { Videos } from './entity/video.entity';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

describe('VideosController', () => {
  let controller: VideosController;
  let service: VideosService;

  beforeEach(async () => {
    service = new VideosService((Videos as unknown as Repository<Videos>));
    controller = new VideosController(service);
  });

 
  describe('findAll', () => {
    it('should return an array of videos', async () => {
      const result = [{
        "id": 1,
        "title": "What is Node js?",
        "description": "What is Node js? This short video explains it in 3 minutes.\n🔥Node js tutorial for beginners: https://youtu.be/TlB_eWDSMt4\n\nSubscribe for more videos: \nhttps://www.youtube.com/channel/UCWv7...\n\nWant to learn more from me? Check out my blog and courses: \n\nCourses: https://codewithmosh.com\nBlog: https://programmingwithmosh.com \nFacebook: https://www.facebook.com/programmingw...\nTwitter: https://twitter.com/moshhamedani",
        "thumbanailUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuVwtVBpw7RQ&psig=AOvVaw0dQfFNbC_UOLhkirFu4R6K&ust=1668344650147000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjngqDaqPsCFQAAAAAdAAAAABAD",
        "videoUrl": "https://firebasestorage.googleapis.com/v0/b/images-services-52149.appspot.com/o/courses%2Fvideoplayback.mp4?alt=media&token=d5c25a49-969b-4448-b4bb-0645af83190b"
        },
        {
        "id": 2,
        "title": "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        "description": "Node.js Tutorial for Beginners: Learn Node in 1 Hour\n🔥 Get the complete Node course: http://bit.ly/2NfkpOC\n👁 Subscribe for more tutorials like this: https://goo.gl/6PYaGF\n\n⭐️ Want to learn more from me? Check out these links: \nCourses: https://codewithmosh.com\nTwitter: https://twitter.com/moshhamedani\nFacebook: https://www.facebook.com/programmingw...\nBlog: https://programmingwithmosh.com \n\nTABLE OF CONTENT: \n00:00 What is Node \n03:01 Node Architecture\n06:04 How Node Works \n10:29 Installing Node \n13:01 Your First Node Program \n15:22 Node Module System\n15:52 Global Object\n19:14 Modules \n22:51 Creating a Module \n27:35 Loading a Module \n32:59 Module Wrapper Function\n39:53 Path Module\n44:03 OS Module\n48:22 File System Module\n53:14 Events Module\n59:33 Event Arguments\n01:02:43 Extending EventEmitter\n01:10:46 HTTP Module",
        "thumbanailUrl": "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
        "videoUrl": "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg"
        }];
      jest.spyOn(service, 'findAll').mockImplementation(() => (result as unknown as Promise<Videos[]>));
      expect(await controller.findAll(1)).toBe(result);
    });
  });
});
