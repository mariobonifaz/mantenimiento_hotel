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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const createProduct = (req, res, productService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield productService.createProduct(req.body);
        res.status(201).json(newProduct);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res, productService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const updatedProduct = yield productService.updateProduct(productId, req.body);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, productService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        yield productService.deleteProduct(productId);
        res.status(204).send();
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.deleteProduct = deleteProduct;
const getAllProducts = (req, res, productService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService.getAllProducts();
        res.status(200).json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.getAllProducts = getAllProducts;
