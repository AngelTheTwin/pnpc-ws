const jwt = require("jwt-simple");
const moment = require("moment");
import { PrismaClient, Usuario } from "@prisma/client";
import { Request, Response } from "express";
import handleError from "../handleErrors";

const prisma = new PrismaClient();
const apyKey = process.env.API_KEY;

export default async function validarAcceso(
    req: any,
    res: Response,
    next: Function
) {
    if (!req.headers.authorization) {
        return res.status(401).json({
            error: "Tu petición no tiene cabecera de autorización",
            code: "T1003",
        });
    }

    let token = req.headers.authorization.split(" ")[1];
    try {
        var payload = jwt.decode(token, apyKey);
    } catch (error) {
        res.status(401).json({
            error: "Error al decodificar su token de autenticación",
            code: "T1001",
        });
        return;
    }

    if (payload.expiration <= moment().unix()) {
        res.status(401).send({
            error: "El token ha expirado",
            code: "T1002",
        });
        return;
    }
    try {
        const storedToken = await prisma.token.findUnique({
            where: {
                id: token,
            },
        });
        if (!storedToken || !storedToken.isActive) {
            res.status(401).send({
                error: "El token ha expirado",
                code: "T1002",
            });
            return;
        }
        const ID = payload.sub;
        const usuario: Usuario | null = await prisma.usuario.findUnique({
            where: {
                ID,
            },
        });
        if (usuario == null) {
            res.status(401).send({
                error: "No tienes acceso a este recurso",
                code: "T1003",
            });
            return;
        }
        req.usuario = usuario.ID;
        req.token = token;
        console.log(`Request received from ${usuario.username}`);
        next();
    } catch (err) {
        handleError(err as Error, res);
    }
}
