


import { Tech } from "../../entities/Tech";
import { ITechRepository } from "../../repositories/ITechRepository";
import { ICreateTechRequestDTO } from "./CreateTechDTO";

export class CreateTechUseCase {
    constructor(
       private techRepository: ITechRepository
    ) {}
    
    
    async execute(data: ICreateTechRequestDTO) {
        const userAlreadyExist = await this.techRepository.findByName(data.name)

        if (userAlreadyExist) {
            throw new Error('Tech already exists');
        }

        const tech = new Tech(data);

        await this.techRepository.save(tech)

    }
}