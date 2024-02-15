// core/domain/services/UserService.ts
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(user: User): Promise<User> {
        // Aquí puedes agregar lógica de validación antes de crear el usuario
        // Por ejemplo, verificar si el correo electrónico ya está en uso, etc.
        return await this.userRepository.createUser(user);
    }

    // Podrías agregar más métodos aquí, como getUserById, updateUser, etc.
}
