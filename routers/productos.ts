import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";
import handleError from "../handleErrors";
import validarAcceso from "../middleware/validarAcceso";

const routerProductosAcademicos: Router = express.Router();
const prisma = new PrismaClient();

routerProductosAcademicos.use(validarAcceso);

routerProductosAcademicos.get(
    "/",
    async (request: Request, response: Response) => {
        try {
            const productos =
                await prisma.$queryRaw`SELECT * FROM reporte_productos_academicos_lgac`;
            response.json(productos);
        } catch (error: any) {
            handleError(error as Error, response);
        }
    }
);

export default routerProductosAcademicos;
