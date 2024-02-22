// core/domain/repositories/UserRepository.ts
import { User } from "../entities/User";

export interface UserRepository {
    createUser(user: User): Promise<User>;
    findById(userId: string): Promise<User | null>; // Método para encontrar un usuario por su ID
    update(user: User): Promise<User>; // Método para actualizar un usuario
}