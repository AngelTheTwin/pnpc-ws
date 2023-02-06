import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";
import handleError from "../handleErrors";
import validarAcceso from "../middleware/validarAcceso";

const routerProgramasAcademicos: Router = express.Router();
const prisma = new PrismaClient();

routerProgramasAcademicos.use(validarAcceso);

routerProgramasAcademicos.get(
    "/",
    async (request: Request, response: Response) => {
        try {
            const programas = await prisma.pROGRAMA_EDUCATIVO.findMany();
            response.json(programas);
        } catch (error: any) {
            handleError(error as Error, response);
        }
    }
);

export default routerProgramasAcademicos;
