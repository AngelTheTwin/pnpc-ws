const { PrismaClient } = require("@prisma/client");
const { tokens } = require("./dist/utils/token");
const prisma = new PrismaClient();

// Este script eliminará los tokens que se encuentren inactivos
// Deberá ejecutarse periodicamente para asegurar que no se quedarán guardados tokens que ya son basura

const main = async () => {
    const storedTokens = await prisma.token.findMany();
    storedTokens.forEach(async (token) => {
        let isTokenActive = await tokens.validateToken(token.id);
        if (!isTokenActive) {
            await prisma.token.delete({
                where: {
                    id: token.id,
                },
            });
        }
    });
};

main();
