
import { Tech } from "../../entities/Tech";
import { ITechRepository } from "../ITechRepository";

export class PostgresTechRepository implements ITechRepository {
    
    private techs: Tech[] = [];
    
    async findByName(name: string): Promise<Tech> {
        const tech = this.techs.find(tech => tech.name === name); 

        return tech;
    }
        
    async save(tech: Tech): Promise<void> {
        this.techs.push(tech);
        
    }
}