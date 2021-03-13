import { Controller, Get, Route, Response, Tags, Post, Body, SuccessResponse, Put } from 'tsoa';
import { ERROR, SUCCESS } from '@config/globals';
import { AlreadyExistsError, NotFoundError } from '@appTypes/response.type';
import { UserService } from './user.service';
import { UserCreationParams, UserUpdateParams } from './user.type';

@Route('user')
@Tags('User Controller')
export class UserController extends Controller {
    userService: UserService;

    constructor() {
        super();
        this.userService = new UserService();
    }

    /**
     * Retrieves the details of all users.
     */
    @Get('/')
    public async getAllUsers() {
        return this.userService.getAllUsers();
    }

    /**
     * Retrieves the details of an existing user.
     * Supply the unique user ID from either and receive corresponding user details.
     * @param userId The user's identifier
     */
    @Get('{userId}')
    @Response<NotFoundError>(ERROR.STATUS.NOT_FOUND, ERROR.MESSAGE.NOT_FOUND)
    public async getUserById(userId: number) {
        return this.userService.getUserById(userId);
    }

    /**
     * Creates an user.
     * Supply the required user fields and receive corresponding user details.
     */
    @Post('/')
    @Response<AlreadyExistsError>(ERROR.STATUS.CONFLICT, ERROR.MESSAGE.ALREADY_EXISTS)
    @SuccessResponse(SUCCESS.STATUS.CREATED)
    public async createUser(@Body() userCreationParams: UserCreationParams) {
        return this.userService.createUser(userCreationParams);
    }

    /**
     * Updates an user.
     * Supply the required user fields and receive corresponding user details.
     */
    @Put('{userId}')
    @Response<AlreadyExistsError>(ERROR.STATUS.CONFLICT, ERROR.MESSAGE.ALREADY_EXISTS)
    @SuccessResponse(SUCCESS.STATUS.CREATED)
    public async updateUser(userId: number, @Body() userUpdateParams: UserUpdateParams) {
        return this.userService.updateUser(userId, userUpdateParams);
    }
}
