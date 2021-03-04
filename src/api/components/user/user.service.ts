import prisma from '@services/prisma';
import { AlreadyExistsException, NotFoundException } from '../../../types/response.type';
import { UserCreationParams, UserResponse, UserResponseWithRecords } from './user.types';

export class UserService {
    static async getAllUsers(): Promise<UserResponseWithRecords> {
        const users = await prisma.user.findMany();
        return UserResponseWithRecords.LISTED(users);
    }

    static async getUserById(userId: number): Promise<UserResponse> {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException();
        return UserResponse.FOUND(user);
    }

    static async createUser(payload: UserCreationParams): Promise<UserResponse> {
        try {
            const user = await prisma.user.create({ data: payload });
            return UserResponse.CREATED(user);
        } catch (error) {
            throw new AlreadyExistsException();
        }
    }
}
