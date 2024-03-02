// app.ts
import express from "express";
import bodyParser from 'body-parser';
import { registerUser,updateUser, deleteUser, getAllUsers } from "./task/infraestructure/controllers/UserController";
import { PostgresUserRepository } from "./task/infraestructure/repositories/PostegresUserRepository";
import { UserService } from "./task/application/services/uses-cases/UserService";

import { createProduct, updateProduct, deleteProduct, getAllProducts } from "./task/infraestructure/controllers/ProductController";
import { PostgresProductRepository } from "./task/infraestructure/repositories/PostgresProductRepository";
import { ProductService } from "./task/application/services/uses-cases/ProductService";

const app = express();
const PORT = 3000;

// Dependency Injection
const userRepository = new PostgresUserRepository();
const userService = new UserService(userRepository);

const productRepository =new PostgresProductRepository();
const productService = new ProductService(productRepository);


// Middleware
app.use(bodyParser.json());

// Routes
app.post('/user/register', (req, res) => registerUser(req, res, userRepository, userService));
app.put('/user/:id', (req, res) => updateUser(req, res, userRepository, userService)); // Agrega la ruta para actualizar un usuario
app.delete('/user/:id', (req, res) => deleteUser(req, res, userRepository, userService)); // Agrega esta línea
app.get('/user', (req, res) => getAllUsers(req, res, userRepository, userService));

app.post('/products', (req, res) => createProduct(req, res, productService));
app.put('/products/:id', (req, res) => updateProduct(req, res, productService));
app.delete('/products/:id', (req, res) => deleteProduct(req, res, productService));
app.get('/products', (req, res) => getAllProducts(req, res, productService));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
