import { PrismaClient, Usuario } from "@prisma/client";

const jwt = require("jwt-simple");
const moment = require("moment");

const prisma = new PrismaClient();

const apiKey = process.env.API_KEY;
const duracionDelToken = 1; // En días

const createToken = async (usuario: Usuario): Promise<string> => {
    var payload = {
        sub: usuario.ID,
        iat: moment().unix(),
        name: usuario.username,
    };
    const token = jwt.encode(payload, apiKey);

    await prisma.token.create({
        data: {
            id: token,
            isActive: true,
        },
    });
    return token;
};

const validateToken = async (token: string): Promise<Boolean> => {
    try {
        const payload = jwt.decode(token, apiKey);
        const today = moment();
        const expDate = moment().utc(payload.iat).add(duracionDelToken, "d");
        if (!today.isBefore(expDate)) {
            return false;
        }
        const storedToken = await prisma.token.findUnique({
            where: {
                id: token,
            },
        });

        return storedToken !== null && storedToken.isActive;
    } catch (error) {
        return false;
    }
};

export const tokens = {
    createToken,
    validateToken,
};
