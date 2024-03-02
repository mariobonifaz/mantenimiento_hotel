"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserController_1 = require("./task/infraestructure/controllers/UserController");
const PostegresUserRepository_1 = require("./task/infraestructure/repositories/PostegresUserRepository");
const UserService_1 = require("./task/application/services/uses-cases/UserService");
const ProductController_1 = require("./task/infraestructure/controllers/ProductController");
const PostgresProductRepository_1 = require("./task/infraestructure/repositories/PostgresProductRepository");
const ProductService_1 = require("./task/application/services/uses-cases/ProductService");
const app = (0, express_1.default)();
const PORT = 3000;
// Dependency Injection
const userRepository = new PostegresUserRepository_1.PostgresUserRepository();
const userService = new UserService_1.UserService(userRepository);
const productRepository = new PostgresProductRepository_1.PostgresProductRepository();
const productService = new ProductService_1.ProductService(productRepository);
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.post('/user/register', (req, res) => (0, UserController_1.registerUser)(req, res, userRepository, userService));
app.put('/user/:id', (req, res) => (0, UserController_1.updateUser)(req, res, userRepository, userService)); // Agrega la ruta para actualizar un usuario
app.delete('/user/:id', (req, res) => (0, UserController_1.deleteUser)(req, res, userRepository, userService)); // Agrega esta línea
app.get('/user', (req, res) => (0, UserController_1.getAllUsers)(req, res, userRepository, userService));
app.post('/products', (req, res) => (0, ProductController_1.createProduct)(req, res, productService));
app.put('/products/:id', (req, res) => (0, ProductController_1.updateProduct)(req, res, productService));
app.delete('/products/:id', (req, res) => (0, ProductController_1.deleteProduct)(req, res, productService));
app.get('/products', (req, res) => (0, ProductController_1.getAllProducts)(req, res, productService));
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
