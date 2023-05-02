import { PERSONA, PrismaClient, TRABAJO_RECEPCIONAL } from "@prisma/client";
import express, { Request, Response, Router, response } from "express";
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

routerProductosAcademicos.get(
	"/:id",
	async (request: Request, response: Response) => {
		try {
			const producto = await prisma.pRODUCTO_ACADEMICO.findUnique({
				where: { ID_PRODUCTO: Number(request.params.id) }
			})
			let result: any = {
				producto
			}

			const results: any[] = await prisma.$queryRaw`SELECT * FROM reporte_productos_academicos_lgac WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`
			const { TIPO } = results[0]

			switch (TIPO) {
				case 'TRABAJO_RECEPCIONAL': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const directorColabora: any = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "DIRECTOR"`
					const codirectorColabora: any = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "CODIRECTOR"`
					const trabajoRecepcional: any = await prisma.$queryRaw`SELECT * FROM TRABAJO_RECEPCIONAL WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						})
					}

					const resultDirector: any = await prisma.$queryRaw`SELECT * FROM PERSONA WHERE ID_PERSONA = ${directorColabora[0].ID_PERSONA}`
					const resultCodirector: any = await prisma.$queryRaw`SELECT * FROM PERSONA WHERE ID_PERSONA = ${codirectorColabora[0]?.ID_PERSONA}`
					
					const TRABAJO_RECEPCIONAL = {
						...result.TRABAJO_RECEPCIONAL,
						...trabajoRecepcional[0],
						AUTORES,
						DIRECTOR: resultDirector[0],
						CODIRECTOR: resultCodirector[0]
					}
					result = {
						...result,
						TRABAJO_RECEPCIONAL,
					}
					break
				}
				case 'ARTICULO': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const articuloResult: any[] = await prisma.$queryRaw`SELECT * FROM ARTICULO WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						}) 
					}

					const ARTICULO = {
						...articuloResult[0],
						AUTORES,
					}

					result = {
						...result,
						ARTICULO,
					}
					break
				}
				case 'CAPITULO_LIBRO': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const capituloResul: any[] = await prisma.$queryRaw`SELECT * FROM CAPITULO_LIBRO WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						}) 
					}

					const CAPITULO_LIBRO = {
						...capituloResul[0],
						AUTORES
					}

					result = {
						...result,
						CAPITULO_LIBRO
					}
					break
				}
				case 'LIBRO': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const libroResult: any[] = await prisma.$queryRaw`SELECT * FROM LIBRO WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						}) 
					}

					const LIBRO = {
						...libroResult[0],
						AUTORES
					}

					result = {
						...result,
						LIBRO
					}
					break
				}
				case 'MEMORIA_CONGRESO': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const memoriaResult: any[] = await prisma.$queryRaw`SELECT * FROM MEMORIA_CONGRESO WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						}) 
					}

					const MEMORIA_CONGRESO = {
						...memoriaResult[0],
						AUTORES
					}

					result = {
						...result,
						MEMORIA_CONGRESO
					}
					break
				}
				case 'PROTOTIPO': {
					const autores: any[] = await prisma.$queryRaw`SELECT * FROM COLABORA WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO} AND ROL = "AUTOR"`
					const prototipoResult: any[] = await prisma.$queryRaw`SELECT * FROM PROTOTIPO WHERE ID_PRODUCTO = ${producto?.ID_PRODUCTO}`

					const AUTORES: any[] = []
					for (const autor of autores) {
						const persona: PERSONA | null = await prisma.pERSONA.findFirst({
							where: { ID_PERSONA: autor.ID_PERSONA }
						})
						persona && AUTORES.push({
							...persona,
							NOMBRE_COMPLETO: `${persona.NOMBRE} ${persona.APELLIDO_PATERNO} ${persona.APELLIDO_MATERNO}`
						}) 
					}

					const PROTOTIPO = {
						...prototipoResult[0],
						AUTORES
					}

					result = {
						...result,
						PROTOTIPO
					}
					break
				}
			}

			response.json(result);
		} catch (error: any) {
			handleError(error as Error, response);
		}
	}
);

routerProductosAcademicos.post(
	"/",
	async (request: Request, response: Response) => {
		let productoAcademico = request.body.productoAcademico
		try {


			let createdProducto = await prisma.pRODUCTO_ACADEMICO.create({
				data: {
					...productoAcademico,
					FECHA: new Date(productoAcademico.FECHA)
				}
			})

			let autores = request.body.contenido.AUTORES
			delete request.body.contenido.AUTORES

			autores.forEach(async (autor: any) => {
				let persona = autor
				if (autor.ES_AUTOR_EXTERNO) {
					delete autor.ES_AUTOR_EXTERNO
					delete autor.ID_PERSONA
					delete autor.NOMBRE_COMPLETO
					persona = await prisma.pERSONA.create({
						data: {
							...autor,
							TIPO: 'EXTERNO'
						}
					})
				}
				await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${createdProducto.ID_PRODUCTO}, ${persona.ID_PERSONA}, "AUTOR")`
			});

			let producto: any = {
				data: {
					...request.body.contenido,
					ID_PRODUCTO: createdProducto.ID_PRODUCTO
				}
			}
			switch (request.body.tipo) {
				case 'TRABAJO_RECEPCIONAL': {
					console.log(request.body.contenido);
					const trabajoRecepcional = request.body.contenido
					if (trabajoRecepcional.ES_CODIRECTOR_EXTERNO) {
						const createdCodirector = await prisma.pERSONA.create({
							data: trabajoRecepcional.CODIRECTOR
						})
						trabajoRecepcional.CODIRECTOR = createdCodirector.ID_PERSONA
					}
					trabajoRecepcional.CODIRECTOR && await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${createdProducto.ID_PRODUCTO}, ${trabajoRecepcional.CODIRECTOR}, "CODIRECTOR")`


					
					console.log(producto.data);
					producto.data = {
						...trabajoRecepcional,
						ID_PRODUCTO: createdProducto.ID_PRODUCTO
					}
					
					delete producto.data.ES_CODIRECTOR_EXTERNO
					delete producto.data.AUTORES
					delete producto.data.CODIRECTOR
					delete producto.data.DIRECTOR
					
					await prisma.tRABAJO_RECEPCIONAL.create({
						data: {
							...producto.data,
						}
					})
					break
				}
				case 'ARTICULO': {
					await prisma.aRTICULO.create({
						data: {
							...producto.data,
							PAGINAS: Number(producto.data.PAGINAS),
							VOLUMEN: Number(producto.data.VOLUMEN),
						}
					})
					break
				}
				case 'CAPITULO_LIBRO': {
					await prisma.cAPITULO_LIBRO.create({
						data: {
							...producto.data,
							PAGINAS: Number(producto.data.PAGINAS),
							VOLUMEN: Number(producto.data.VOLUMEN),
						}
					})
					break
				}
				case 'LIBRO': {
					await prisma.lIBRO.create({
						data: {
							...producto.data,
							PAGINAS: Number(producto.data.PAGINAS),
							VOLUMEN: Number(producto.data.VOLUMEN),
						}
					})
					break
				}
				case 'MEMORIA_CONGRESO': {
					await prisma.mEMORIA_CONGRESO.create({
						data: {
							...producto.data,
							PAGINAS: Number(producto.data.PAGINAS),
							FECHA: new Date(producto.data.FECHA)
						}
					})
					break
				}
				case 'PROTOTIPO': {
					await prisma.pROTOTIPO.create(producto)
					break
				}
			}


			response.send()
		} catch (error: any) {
			handleError(error as Error, response)
		} finally {
			response.send()
		}
	}
)

routerProductosAcademicos.put(
	'/:id',
	async (request: Request, response: Response) => {
		const producto = request.body.productoAcademico
		delete producto.ID_PRODUCTO
		delete producto.ARCHIVO_EVIDENCIA
		delete producto.ID_LGAC
		delete producto.ESTANCIA
		delete producto.ID_ESTANCIA

		try {
			console.log(request.body.tipo);
			const result = await prisma.pRODUCTO_ACADEMICO.update({
				where: { ID_PRODUCTO: Number(request.params.id) },
				data: {
					...producto,
					FECHA: new Date(producto.FECHA)
				}
			})

			switch (request.body.tipo) {
				case 'TRABAJO_RECEPCIONAL': {
					const trabajoRecepcional = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${trabajoRecepcional.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of trabajoRecepcional.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${trabajoRecepcional.ID_PRODUCTO} AND ROL = "DIRECTOR"`
					await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${trabajoRecepcional.ID_PRODUCTO}, ${trabajoRecepcional.DIRECTOR}, "DIRECTOR")`

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${trabajoRecepcional.ID_PRODUCTO} AND ROL = "CODIRECTOR"`
					if (trabajoRecepcional.ES_CODIRECTOR_EXTERNO) {
						delete trabajoRecepcional.ES_CODIRECTOR_EXTERNO
						const createdCodirector = await prisma.pERSONA.create({
							data: trabajoRecepcional.CODIRECTOR
						})
						trabajoRecepcional.CODIRECTOR = createdCodirector.ID_PERSONA
					}
					trabajoRecepcional.CODIRECTOR && await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${trabajoRecepcional.CODIRECTOR}, "CODIRECTOR")`

					delete trabajoRecepcional.ID_PRODUCTO
					delete trabajoRecepcional.REPOSITORIO
					delete trabajoRecepcional.ESTADO
					delete trabajoRecepcional.ACTA
					delete trabajoRecepcional.LUGAR
					delete trabajoRecepcional.RESULTADO
					delete trabajoRecepcional.AUTORES
					delete trabajoRecepcional.AUTOR
					delete trabajoRecepcional.DIRECTOR
					delete trabajoRecepcional.CODIRECTOR

					await prisma.pRODUCTO_ACADEMICO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: trabajoRecepcional
					})
					break
				}
				case 'ARTICULO': {
					const articulo = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${articulo.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of articulo.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					delete articulo.AUTORES

					await prisma.aRTICULO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: {
							...articulo,
							PAGINAS: Number(articulo.PAGINAS),
							VOLUMEN: Number(articulo.VOLUMEN)
						},
					})
					break
				}
				case 'CAPITULO_LIBRO': {
					const capituloLibro = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${capituloLibro.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of capituloLibro.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					delete capituloLibro.AUTORES

					await prisma.cAPITULO_LIBRO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: {
							...capituloLibro,
							PAGINAS: Number(capituloLibro.PAGINAS),
							VOLUMEN: Number(capituloLibro.VOLUMEN)
						},
					})
					break
				}
				case 'LIBRO': {
					const libro = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${libro.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of libro.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					delete libro.AUTORES

					await prisma.lIBRO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: {
							...libro,
							PAGINAS: Number(libro.PAGINAS),
							VOLUMEN: Number(libro.VOLUMEN)
						},
					})
					break
				}
				case 'MEMORIA_CONGRESO': {
					const memoriaCongreso = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${memoriaCongreso.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of memoriaCongreso.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					delete memoriaCongreso.AUTORES

					await prisma.mEMORIA_CONGRESO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: {
							...memoriaCongreso,
							PAGINAS: Number(memoriaCongreso.PAGINAS),
							FECHA: new Date(memoriaCongreso.FECHA)
						},
					})
					break
				}
				case 'PROTOTIPO': {
					const prototipo = request.body.contenido

					await prisma.$queryRaw`DELETE FROM COLABORA WHERE ID_PRODUCTO = ${prototipo.ID_PRODUCTO} AND ROL = "AUTOR"`
					for (const autor of prototipo.AUTORES) {
						await prisma.$queryRaw`INSERT INTO COLABORA VALUES(${result.ID_PRODUCTO}, ${autor.ID_PERSONA}, "AUTOR")`
					}

					delete prototipo.AUTORES

					await prisma.pROTOTIPO.update({
						where: { ID_PRODUCTO: Number(result.ID_PRODUCTO) },
						data: {
							...prototipo,
						},
					})
					break
				}
			}

			result && response.status(200).json({
				message: "Producto Academico actualizado con exito"
			})
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

routerProductosAcademicos.delete(
	'/:id',
	async (request: Request, response: Response) => {
		try {
			await prisma.$queryRaw`DELETE FROM TRABAJO_RECEPCIONAL WHERE ID_PRODUCTO = ${request.params.id}`
			await prisma.$queryRaw`DELETE FROM ARTICULO WHERE ID_PRODUCTO = ${request.params.id}`
			await prisma.$queryRaw`DELETE FROM CAPITULO_LIBRO WHERE ID_PRODUCTO = ${request.params.id}`
			await prisma.$queryRaw`DELETE FROM LIBRO WHERE ID_PRODUCTO = ${request.params.id}`
			await prisma.$queryRaw`DELETE FROM MEMORIA_CONGRESO WHERE ID_PRODUCTO = ${request.params.id}`
			await prisma.$queryRaw`DELETE FROM PROTOTIPO WHERE ID_PRODUCTO = ${request.params.id}`

			await prisma.pRODUCTO_ACADEMICO.delete({
				where: { ID_PRODUCTO: Number(request.params.id) }
			})
			response.status(201).send()
		} catch (error: any) {
			handleError(error as Error, response)
		}
	}
)

export default routerProductosAcademicos;
