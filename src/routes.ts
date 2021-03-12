
//sistema de rotas da aplicação

import { Router } from "express";
import { createTechController } from "./useCases/CreateTech";

const router = Router()

router.post('/techs', (req, res) => {
    return createTechController.handle(req, res);
});
export { router }