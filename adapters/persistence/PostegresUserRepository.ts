// adapters/persistence/PostgresUserRepository.ts
import { User } from "../../core/domain/entities/User";
import { UserRepository } from "../../core/domain/repositories/UserRepository";
import UserModel from "./models/UserModel";
import { PasswordService } from "../../core/domain/services/PasswordService";

export class PostgresUserRepository implements UserRepository {
    async createUser(user: User): Promise<User> {
        try {
            // Encriptar la contraseña antes de almacenarla en la base de datos
            const hashedPassword = await PasswordService.hashPassword(user.password);
            
            // Crear un nuevo usuario en la base de datos
            const newUser = await UserModel.create({
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: hashedPassword
            });
            
            // Devolver el usuario recién creado
            return newUser.toJSON() as User;
        } catch (error) {
            // Manejar errores de validación o de la base de datos aquí
            const errorMessage = (error instanceof Error && error.message) ? error.message : 'Unknown error';
            throw new Error(`Error creating user: ${errorMessage}`);
        }
    }
}
