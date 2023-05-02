import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import handleError from "../handleErrors";
import validarAcceso from "../middleware/validarAcceso";

const routerGeneraciones: Router = Router()
const prisma = new PrismaClient()

routerGeneraciones.use(validarAcceso)

routerGeneraciones.get(
	'/',
	async (request: Request, response: Response) => {
		try {
			const generaciones = await prisma.gENERACION.findMany()
			response.json(generaciones)
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

export default routerGeneraciones