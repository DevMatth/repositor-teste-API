import { PostgresTechRepository } from "../../repositories/implementations/PostgresTechRepository";
import { CreateTechController } from "./CreateTechController";
import { CreateTechUseCase } from "./CreateTechUseCase";

const postgresTechRepository = new PostgresTechRepository()

const createTechUseCase = new CreateTechUseCase(
    postgresTechRepository
)

const createTechController = new CreateTechController(
    createTechUseCase
)

export { createTechUseCase, createTechController }