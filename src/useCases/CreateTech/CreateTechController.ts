
//======= constroles de criação da aplicação

import { Request, Response } from "express";
import { CreateTechUseCase } from "./CreateTechUseCase";

export class CreateTechController {
    constructor(
        private createTechUseCase: CreateTechUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, link, description, tags } = request.body;

        try {
            await this.createTechUseCase.execute({
                name,
                link,
                description,
                tags
            })
            return response.status(201).send();
        }   catch (err) {
            return response.status(400).json({
                mensage: err.mensage || 'Unexpected error.'
            })
        }
    }
}