import { DataSource, Repository } from 'typeorm';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { Accounts } from '../entity/accounts.entity';
describe('userController', () => {
    let controller: UserController;
    let service: UsersService;
    let dataSource: DataSource;
    beforeEach(() => {
        service = new UsersService((Accounts as unknown as Repository<Accounts>), dataSource);
        controller = new UserController(service);
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = [{
                "id": 4,
                "username": "Brett Schultz",
                "password": "01284375954",
                "verified": "yes",
                "status": "active",
                "email": "BrettSchultz@gmail.com",
                "role": {
                    "id": 4,
                    "name": "user"
                },
            }];

            jest.spyOn(service, 'findAll').mockImplementation(async () => result);
            expect(await controller.findAll(0)).toBe(result);
        });
    });
});