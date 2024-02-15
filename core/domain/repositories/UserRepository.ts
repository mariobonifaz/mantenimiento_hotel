// core/domain/repositories/UserRepository.ts
import { User } from "../entities/User";

export interface UserRepository {
    createUser(user: User): Promise<User>;
}