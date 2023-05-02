import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import validarAcceso from "../middleware/validarAcceso";
import handleError from "../handleErrors";

const routerAcademicos: Router = Router()
const prisma = new PrismaClient()

routerAcademicos.use(validarAcceso)

routerAcademicos.get(
	'/',
	async (request: Request, response: Response) => {
		try {
			const academicoos = await prisma.$queryRaw`SELECT * FROM academico_nab`
			response.json(academicoos)
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerAcademicos.post(
	'/',
	async (request: Request, response: Response) => {
		try {
			const academico = request.body
			const pertenece = {
				ID_PERSONA: academico.ID_PERSONA,
				ID_PROGRAMA: academico.ID_PROGRAMA,
				FECHA_INGRESO: new Date(academico.FECHA_INGRESO)
			}
			delete academico.ID_PROGRAMA
			delete academico.FECHA_INGRESO
			const createdAcademico = await prisma.pERSONA.create({
				data: {
					...academico,
					CVU: Number(academico.CVU),
					TIPO: 'ACADEMICO'
				}
			})
			await prisma.$queryRaw`INSERT INTO PERTENECE(ID_PROGRAMA, ID_PERSONA, FECHA_INGRESO) VALUES (${pertenece.ID_PROGRAMA}, ${createdAcademico.ID_PERSONA}, ${pertenece.FECHA_INGRESO})`

			response.status(201).json({
				message: "Academico registrado con exito."
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerAcademicos.put(
	'/:id',
	async (request: Request, response: Response) => {
		const academico = request.body
		delete academico.ID_PERSONA
		delete academico.FECHA_INGRESO
		delete academico.ID_PROGRAMA
		delete academico.NAB
		delete academico.NOMBRE_COMPLETO
		try {
			const result = await prisma.pERSONA.update({
				where: { ID_PERSONA: Number(request.params.id) },
				data: academico,
			})
			result && response.status(200).json({
				message: "Academico actualizado con exito."
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerAcademicos.delete(
	'/:id',
	async (request: Request, response: Response) => {
		try {
			await prisma.$queryRaw`DELETE FROM PERTENECE WHERE ID_PERSONA = ${request.params.id}`
			await prisma.pERSONA.delete({
				where: { ID_PERSONA: Number(request.params.id) }
			})
			response.status(204).send()
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

export default routerAcademicos