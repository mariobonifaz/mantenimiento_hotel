// adapters/controllers/UserController.ts
import { Request, Response } from "express";
import { UserService } from "../../core/domain/services/UserService";
import { UserRepository } from "../../core/domain/repositories/UserRepository";

export const registerUser = async (req: Request, res: Response, userRepository: UserRepository, userService: UserService) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            // Manejar otros tipos de errores aquí
            res.status(500).json({ error: "Internal server error" });
        }
    }
};


