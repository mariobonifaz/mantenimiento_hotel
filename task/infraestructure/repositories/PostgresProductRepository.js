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
exports.PostgresProductRepository = void 0;
const ProductModel_1 = __importDefault(require("../../domain/entities/ProductModel"));
class PostgresProductRepository {
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield ProductModel_1.default.create({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    // Agrega aquí otros campos relevantes para tu producto
                });
                return newProduct.toJSON();
            }
            catch (error) {
                const errorMessage = (error instanceof Error && error.message) ? error.message : 'Unknown error';
                throw new Error(`Error creating product: ${errorMessage}`);
            }
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ProductModel_1.default.update({
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    // Agrega aquí otros campos relevantes para tu producto
                }, {
                    where: { id: product.id }
                });
                return product;
            }
            catch (error) {
                throw new Error(`Error updating product: ${error.message}`);
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield ProductModel_1.default.findByPk(productId);
                if (!product) {
                    throw new Error('Product not found');
                }
                yield product.destroy();
            }
            catch (error) {
                throw new Error(`Error deleting product: ${error.message}`);
            }
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductModel_1.default.findAll();
                return products.map(product => product.toJSON());
            }
            catch (error) {
                throw new Error(`Error getting all products: ${error.message}`);
            }
        });
    }
    findById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield ProductModel_1.default.findByPk(productId);
                return product ? product.toJSON() : null;
            }
            catch (error) {
                throw new Error(`Error finding product by ID: ${error.message}`);
            }
        });
    }
}
exports.PostgresProductRepository = PostgresProductRepository;
