import { User } from './entity/user.entity';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { Repository } from 'typeorm';

describe('userController', () => {
    let controller: UserController;
    let service: UsersService;

    beforeEach(() => {
        service = new UsersService((User as unknown as Repository<User>));
        controller = new UserController(service);
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = [{
                "id": 1,
                "username": "[value-2]",
                "password": "[value-3]",
                "email": "[value-4]",
                "accessToken": "[value-5]",
                "refresshToken": "[value-6]"
            }];

            jest.spyOn(service, 'findAll').mockImplementation(async () => await result);
            expect(await controller.findAll()).toBe(result);
        });
    });
});