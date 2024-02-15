"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserController_1 = require("./adapters/controllers/UserController");
const PostegresUserRepository_1 = require("./adapters/persistence/PostegresUserRepository");
const UserService_1 = require("./core/domain/services/UserService");
const app = (0, express_1.default)();
const PORT = 3000;
// Dependency Injection
const userRepository = new PostegresUserRepository_1.PostgresUserRepository();
const userService = new UserService_1.UserService(userRepository);
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.post('/register', (req, res) => (0, UserController_1.registerUser)(req, res, userRepository, userService));
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
