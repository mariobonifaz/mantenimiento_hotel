// adapters/persistence/PostgresUserRepository.ts
import { User } from "../../core/domain/entities/User";
import { UserRepository } from "../../core/domain/repositories/UserRepository";
import UserModel from "./models/UserModel"; // Asegúrate de importar correctamente UserModel

export class PostgresUserRepository implements UserRepository {
    async createUser(user: User): Promise<User> {
        try {
            // Verifica que estás pasando correctamente los datos del usuario
            const newUser = await UserModel.create({
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password
            });
            return newUser.toJSON() as User;
        } catch (error) {
            // Manejar errores de validación o de la base de datos aquí
            const errorMessage = (error instanceof Error && error.message) ? error.message : 'Unknown error';
            throw new Error(`Error creating user: ${errorMessage}`);
        }
    }
}

