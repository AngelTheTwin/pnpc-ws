import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import handleError from "../handleErrors";
import validarAcceso from "../middleware/validarAcceso";

const routerEstudiantes: Router = Router()
const prisma = new PrismaClient()

routerEstudiantes.use(validarAcceso)

routerEstudiantes.get(
	"/",
	async (request: Request, response: Response) => {
		try {
			const estudiantes = await prisma.$queryRaw`SELECT * FROM estudiante_generacion`
			response.json(estudiantes)
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerEstudiantes.post(
	"/",
	async (request: Request, response: Response) => {
		try {
			const estudiante = request.body
			const generacion = Number(estudiante.GENERACION)
			delete (estudiante.GENERACION)
			let createdEstudiante = await prisma.pERSONA.create({
				data: {
					...estudiante,
					ID_GENERACION: generacion,
					CVU: Number(estudiante.CVU),
					TIPO: 'ESTUDIANTE'
				}
			})
			response.status(201).json(createdEstudiante)
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerEstudiantes.put(
	'/:id',
	async (request: Request, response: Response) => {
		const estudiante = request.body
		delete estudiante.ID_PERSONA
		delete estudiante.FECHA_INGRESO
		delete estudiante.ID_PROGRAMA
		delete estudiante.CVU
		delete estudiante.GENERACION
		delete estudiante.NOMBRE_COMPLETO
		try {
			const result = await prisma.pERSONA.update({
				where: { ID_PERSONA: Number(request.params.id) },
				data: estudiante,
			})
			result && response.status(200).json({
				message: "Academico actualizado con exito."
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerEstudiantes.delete(
	'/:id',
	async (request: Request, response: Response) => {
		try {
			await prisma.pERSONA.delete({
				where: { ID_PERSONA: Number(request.params.id) }
			})
			response.status(201).send()
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

export default routerEstudiantes