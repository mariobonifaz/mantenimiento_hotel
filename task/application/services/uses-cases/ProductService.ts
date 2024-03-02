// services/ProductService.ts
import { Product } from '../../../domain/entities/Product';
import { ProductRepository } from '../../../infraestructure/repositories/ProductRepository';

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    async createProduct(product: Product): Promise<void> {
        try {
            await this.productRepository.createProduct(product);
        } catch (error) {
            throw new Error(`Error creating product: ${(error as Error).message}`);
        }
    }

    async updateProduct(productId: string, ProductData: Partial<Product>): Promise<Product> {
        try {
            // Primero, obtenemos el producto que queremos actualizar
            const existingProduct = await this.productRepository.findById(productId);

            // Si el producto no existe, lanzamos un error
            if (!existingProduct) {
                throw new Error('Product not found');
            }

            // Actualizamos los campos proporcionados en updatedProductData
            Object.assign(existingProduct, ProductData);

            // Actualizamos el producto en la base de datos
            const updatedProduct = await this.productRepository.updateProduct(existingProduct);

            return updatedProduct;
        } catch (error) {
            throw new Error(`Error updating product: ${(error as Error).message}`);
        }
    }

    async deleteProduct(productId: string): Promise<void> {
        try {
            const existingProduct = await this.productRepository.findById(productId);
            if( !existingProduct){
                throw new Error('Product not found'); 
            }
        } catch (error) {
            throw new Error(`Error deleting product: ${(error as Error).message}`);
        }
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            return await this.productRepository.getAllProducts();
        } catch (error) {
            throw new Error(`Error getting all products: ${(error as Error).message}`);
        }
    }
}
