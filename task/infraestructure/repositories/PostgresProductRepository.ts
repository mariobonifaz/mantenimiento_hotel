// adapters/persistence/PostgresProductRepository.ts
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";
import ProductModel from "../../domain/entities/ProductModel";

export class PostgresProductRepository implements ProductRepository {
    async createProduct(product: Product): Promise<Product> {
        try {
            const newProduct = await ProductModel.create({
                name: product.name,
                description: product.description,
                price: product.price,
                // Agrega aquí otros campos relevantes para tu producto
            });
            return newProduct.toJSON() as Product;
        } catch (error) {
            const errorMessage = (error instanceof Error && error.message) ? error.message : 'Unknown error';
            throw new Error(`Error creating product: ${errorMessage}`);
        }
    }

    async updateProduct(product: Product): Promise<Product> {
        try {
            await ProductModel.update(
                {
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    // Agrega aquí otros campos relevantes para tu producto
                },
                {
                    where: { id: product.id }
                }
            );
            return product;
        } catch (error) {
            throw new Error(`Error updating product: ${(error as Error).message}`);
        }
    }

    async deleteProduct(productId: string): Promise<void> {
        try {
            const product = await ProductModel.findByPk(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            await product.destroy();
        } catch (error) {
            throw new Error(`Error deleting product: ${(error as Error).message}`);
        }
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            const products = await ProductModel.findAll();
            return products.map(product => product.toJSON() as Product);
        } catch (error) {
            throw new Error(`Error getting all products: ${(error as Error).message}`);
        }
    }

    async findById(productId: string): Promise<Product | null> {
        try {
            const product = await ProductModel.findByPk(productId);
            return product ? product.toJSON() as Product : null;
        } catch (error) {
            throw new Error(`Error finding product by ID: ${(error as Error).message}`);
        }
    }
}
