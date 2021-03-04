import { Controller, Get, Route, Response, Tags } from 'tsoa';
import { UserService } from './user.service';
import { UserFound, UserNotFound, UsersListed } from './user.types';

@Route('user')
@Tags('User Controller')
export class UserController extends Controller {
    @Get()
    @Response<UsersListed>(302, 'Users Listed!')
    public async getAllUsers() {
        return UserService.getAllUsers();
    }

    @Get('{userId}')
    @Response<UserFound>(200, 'Found')
    @Response<UserNotFound>(404, 'Not found!')
    public async getUserById(userId: number) {
        return UserService.getUserById(userId);
    }

    // @Post('{userId}')
    // @Body()
    // @SuccessResponse(201, 'Created!') // Custom success response
    // public async createUser(userId: number) {
    // 	return UserService.getUserById(userId);
    // }
}
