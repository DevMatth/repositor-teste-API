import { Tech } from "../entities/Tech";


export interface ITechRepository {
    findByName(name: string): Promise<Tech>,
    save(tech: Tech): Promise<void>;
}