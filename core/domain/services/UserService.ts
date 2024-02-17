// core/domain/services/UserService.ts
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';
import { PasswordService } from './PasswordService';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(user: User): Promise<void> {
        // Encriptar la contraseña del usuario antes de almacenarla en la base de datos
        const hashedPassword = await PasswordService.hashPassword(user.password);
        const userWithHashedPassword: User = { ...user, password: hashedPassword };

        await this.userRepository.createUser(userWithHashedPassword);
    }
}
