import prisma from '@services/prisma';
import { UserResponse, UserResponseWithRecords } from './user.types';

export class UserService {
    static async getAllUsers(): Promise<UserResponseWithRecords> {
        const users = await prisma.user.findMany();
        return UserResponseWithRecords.LISTED(users);
    }

    static async getUserById(userId: number): Promise<UserResponse> {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return UserResponse.NOT_FOUND();
        return UserResponse.FOUND(user);
    }
}
