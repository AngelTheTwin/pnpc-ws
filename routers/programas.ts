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
			response.json(programas)
		} catch (error: any) {
			handleError(error as Error, response);
		}
	}
);

routerProgramasAcademicos.post(
	"/",
	async (request: Request, response: Response) => {
		let programa = request.body
		delete programa.COORDINADOR_ACTUAL
		delete programa.REPRESENTANTE
		delete programa.ID_PROGRAMA
		delete programa.COORDINADOR

		try {
			let result = await prisma.pROGRAMA_EDUCATIVO.create({
				data: {
					...programa,
					FECHA_CREACION: new Date(programa.FECHA_CREACION),
					FECHA_INICIO: new Date(programa.FECHA_INICIO),
					FECHA_FIRMA: new Date(programa.FECHA_FIRMA),
				}
			})
			result && response.status(201).json({
				message: "Programa registrado con exito."
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerProgramasAcademicos.put(
	'/:id',
	async (request: Request, response: Response) => {
		let programa = request.body

		delete programa.COORDINADOR_ACTUAL
		delete programa.REPRESENTANTE
		delete programa.ID_PROGRAMA
		delete programa.COORDINADOR
		try {
			let result = await prisma.pROGRAMA_EDUCATIVO.update({
				where: { ID_PROGRAMA: Number(request.params.id) },
				data: {
					...programa,
					FECHA_CREACION: new Date(programa.FECHA_CREACION),
					FECHA_INICIO: new Date(programa.FECHA_INICIO),
					FECHA_FIRMA: new Date(programa.FECHA_FIRMA),
				},
			})
			result && response.status(200).json({
				message: "Programa actualizado con exito."
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerProgramasAcademicos.delete(
	'/:id',
	async (request: Request, response: Response) => {
		try {
			await prisma.pROGRAMA_EDUCATIVO.delete({
				where: { ID_PROGRAMA: Number(request.params.id) }
			})
			response.status(204).send()
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

export default routerProgramasAcademicos;
