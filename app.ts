// app.ts
import express from "express";
import bodyParser from 'body-parser';
import { registerUser,updateUser, deleteUser, getAllUsers } from "./adapters/controllers/UserController";
import { PostgresUserRepository } from "./adapters/persistence/PostegresUserRepository";
import { UserService } from "./core/domain/services/UserService";

const app = express();
const PORT = 3000;

// Dependency Injection
const userRepository = new PostgresUserRepository();
const userService = new UserService(userRepository);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/user/register', (req, res) => registerUser(req, res, userRepository, userService));
app.put('/user/:id', (req, res) => updateUser(req, res, userRepository, userService)); // Agrega la ruta para actualizar un usuario
app.delete('/user/:id', (req, res) => deleteUser(req, res, userRepository, userService)); // Agrega esta línea
app.get('/user', (req, res) => getAllUsers(req, res, userRepository, userService));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
