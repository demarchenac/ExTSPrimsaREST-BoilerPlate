import { Controller, Route, Response, Tags, Post, Body, SuccessResponse } from 'tsoa';
import { ERROR, SUCCESS } from '@config/globals';
import { AlreadyExistsError, InvalidCredentialsError, NotFoundError } from '@appTypes/response.type';
import { LoginParams, SignUpParams } from './auth.type';
import { AuthService } from './auth.service';

@Route('auth')
@Tags('Auth Controller')
export class AuthController extends Controller {
    authService: AuthService;

    constructor() {
        super();
        this.authService = new AuthService(this);
    }

    /**
     * Authenticates with user credentials
     */
    @Post('/login')
    @Response<NotFoundError>(ERROR.STATUS.NOT_FOUND, ERROR.MESSAGE.NOT_FOUND)
    @Response<InvalidCredentialsError>(ERROR.STATUS.CONFLICT, ERROR.MESSAGE.INVALID_CREDENTIALS)
    @SuccessResponse(SUCCESS.STATUS.CREATED)
    public async login(@Body() loginParams: LoginParams) {
        return this.authService.doLogin(loginParams);
    }

    /**
     * Creates an authenticates.
     * Supply the required user fields and receive corresponding user details.
     */
    @Post('/signup')
    @Response<AlreadyExistsError>(ERROR.STATUS.CONFLICT, ERROR.MESSAGE.ALREADY_EXISTS)
    @SuccessResponse(SUCCESS.STATUS.CREATED)
    public async singup(@Body() signUpParams: SignUpParams) {
        return this.authService.doSignup(signUpParams);
    }
}
