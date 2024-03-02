import { Product } from "../../domain/entities/Product";

export interface ProductRepository {
    createProduct(product: Product): Promise<Product>;
    updateProduct(product: Product): Promise<Product>;
    deleteProduct(productId: string): Promise<void>;
    getAllProducts(): Promise<Product[]>;
    findById(productId: string): Promise<Product | null>;
}