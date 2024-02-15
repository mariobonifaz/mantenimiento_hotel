"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUserRepository = void 0;
const UserModel_1 = __importDefault(require("./models/UserModel")); // Asegúrate de importar correctamente UserModel
class PostgresUserRepository {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verifica que estás pasando correctamente los datos del usuario
                const newUser = yield UserModel_1.default.create({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    password: user.password
                });
                return newUser.toJSON();
            }
            catch (error) {
                // Manejar errores de validación o de la base de datos aquí
                const errorMessage = (error instanceof Error && error.message) ? error.message : 'Unknown error';
                throw new Error(`Error creating user: ${errorMessage}`);
            }
        });
    }
}
exports.PostgresUserRepository = PostgresUserRepository;
