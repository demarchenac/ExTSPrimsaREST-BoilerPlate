import prisma from '@services/prisma';
import { AlreadyExistsException, NotFoundException } from '@appTypes/response.type';
import { SignUpParams } from '../auth/auth.type';
import { UserCreationParams, UserResponse, UserResponseWithRecords, UserUpdateParams } from './user.type';

export class UserService {
    async getAllUsers(): Promise<UserResponseWithRecords> {
        const users = await prisma.user.findMany();
        return UserResponseWithRecords.LISTED(users);
    }

    async getUserById(userId: number): Promise<UserResponse> {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException();
        return UserResponse.FOUND(user);
    }

    async createUser(payload: UserCreationParams | SignUpParams): Promise<UserResponse> {
        try {
            const user = await prisma.user.create({ data: payload });
            return UserResponse.CREATED(user);
        } catch (error) {
            throw new AlreadyExistsException();
        }
    }

    async updateUser(userId: number, payload: UserUpdateParams): Promise<UserResponse> {
        try {
            const user = await prisma.user.update({ where: { id: userId }, data: payload });
            return UserResponse.UPDATED(user);
        } catch (error) {
            throw new AlreadyExistsException();
        }
    }
}
