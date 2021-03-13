import { Controller, Get, Route, SuccessResponse, Tags } from 'tsoa';
import { PingResponse } from './ping.type';

@Route('ping')
@Tags('Ping Controller')
export class PingController extends Controller {
    @Get()
    @SuccessResponse(200, 'Success!') // Custom success response
    public async getPing(): Promise<PingResponse> {
        return { message: 'Pong.' };
    }
}
