// controllers/ProductController.ts
import { Request, Response } from "express";
import { ProductService } from "../../application/services/uses-cases/ProductService";
import { ProductRepository } from "../repositories/ProductRepository";
import { Product } from "../../domain/entities/Product";


export const createProduct = async (req: Request, res: Response, productService: ProductService) => {
    try {
        const newProduct = await productService.createProduct(req.body as Product);
        res.status(201).json(newProduct);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const updateProduct = async (req: Request, res: Response, productService: ProductService) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await productService.updateProduct(productId, req.body);
        res.status(200).json(updatedProduct);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
} 

export const deleteProduct = async (req: Request, res: Response, productService: ProductService) => {
    try {
        const productId = req.params.id;
        await productService.deleteProduct(productId);
        res.status(204).send();
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const getAllProducts = async (req: Request, res: Response, productService: ProductService) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

