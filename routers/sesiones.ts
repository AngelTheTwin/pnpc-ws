import { PrismaClient } from "@prisma/client";
import express, { Request, Response, Router } from "express";
import handleError from "../handleErrors";
import validarAcceso from "../middleware/validarAcceso";
import { passwordEncription } from "../utils/encrypting";
import { tokens } from "../utils/token";

const routerSesiones: Router = express.Router();
const prisma = new PrismaClient();

routerSesiones.post(
    "/validar",
    async (request: Request, response: Response) => {
        const body = request.body;

        if (!body.token) {
            response.status(400).json({
                message: "Parámetro token requerido",
            });
            return;
        }

        try {
            const esValido = await tokens.validateToken(body.token);
            response.json({
                result: esValido,
                message: esValido ? "Token válido" : "Token inválido",
            });
        } catch (error: any) {
            handleError(error as Error, response);
        }
    }
);

routerSesiones.post("/login", async (request: Request, response: Response) => {
    const body = request.body;

    if (!body.username || !body.password) {
        response.status(400).json({
            message: "Parámetros username y password requeridos",
        });
        return;
    }

    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                username: body.username,
            },
        });

        if (
            usuario === null ||
            !(await passwordEncription.verifyPassword(
                body.password,
                usuario.password
            ))
        ) {
            response.json({
                result: false,
                message: "Credenciales incorrectas.",
            });
            return;
        }

        response.json({
            result: true,
            message: "Credenciales correctas",
            token: await tokens.createToken(usuario),
			usuario,
        });
    } catch (error: any) {
        handleError(error as Error, response);
    }
});

routerSesiones.get(
    "/logout",
    validarAcceso,
    async (request: Request, response: Response) => {
        const token = (request as any).token;
        console.log(token);
        try {
            const tokenEliminado = await prisma.token.delete({
                where: {
                    id: token,
                },
            });

            response.json({
                result: true,
                message: "Sesión cerrada correctamente",
            });
        } catch (error: any) {
            handleError(error as Error, response);
        }
    }
);

export default routerSesiones;
