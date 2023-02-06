const jwt = require("jwt-simple");
const moment = require("moment");
import { PrismaClient, Usuario } from "@prisma/client";
import { Request, Response } from "express";
import handleError from "../handleErrors";

const prisma = new PrismaClient();
const apyKey = process.env.API_KEY;

export default async function revisarAcceso(
    req: any,
    res: Response,
    next: Function
) {
    if (!req.headers.authorization) {
        next();
        return;
    }

    let token = req.headers.authorization.split(" ")[1];
    try {
        var payload = jwt.decode(token, apyKey);
    } catch (error) {
        next();
        return;
    }

    if (payload.expiration <= moment().unix()) {
        next();
        return;
    }

    try {
        const storedToken = await prisma.token.findUnique({
            where: {
                id: token,
            },
        });
        if (!storedToken || !storedToken.isActive) {
            next();
            return;
        }
        const ID = payload.sub;
        const usuario: Usuario | null = await prisma.usuario.findUnique({
            where: {
                ID,
            },
        });
        if (usuario == null) {
            next();
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
