// app.ts
import express from "express";
import bodyParser from 'body-parser';
import { registerUser } from "./adapters/controllers/UserController";
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

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
