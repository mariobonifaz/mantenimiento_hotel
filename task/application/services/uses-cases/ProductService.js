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
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.productRepository.createProduct(product);
            }
            catch (error) {
                throw new Error(`Error creating product: ${error.message}`);
            }
        });
    }
    updateProduct(productId, ProductData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Primero, obtenemos el producto que queremos actualizar
                const existingProduct = yield this.productRepository.findById(productId);
                // Si el producto no existe, lanzamos un error
                if (!existingProduct) {
                    throw new Error('Product not found');
                }
                // Actualizamos los campos proporcionados en updatedProductData
                Object.assign(existingProduct, ProductData);
                // Actualizamos el producto en la base de datos
                const updatedProduct = yield this.productRepository.updateProduct(existingProduct);
                return updatedProduct;
            }
            catch (error) {
                throw new Error(`Error updating product: ${error.message}`);
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProduct = yield this.productRepository.findById(productId);
                if (!existingProduct) {
                    throw new Error('Product not found');
                }
            }
            catch (error) {
                throw new Error(`Error deleting product: ${error.message}`);
            }
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productRepository.getAllProducts();
            }
            catch (error) {
                throw new Error(`Error getting all products: ${error.message}`);
            }
        });
    }
}
exports.ProductService = ProductService;
