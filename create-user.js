const { PrismaClient } = require("@prisma/client");
const { passwordEncription } = require("./dist/utils/encrypting");
const prompt = require("prompt-sync")();

const prisma = new PrismaClient();
const main = async () => {
    const usuario = await prisma.usuario.create({
        data: {
            username: prompt("Ingrese el nombre de usuario: "),
            password: await passwordEncription.hashPassword(
                prompt("Ingrese la contraseña: ")
            ),
        },
    });
    console.log(usuario);
};

main();
