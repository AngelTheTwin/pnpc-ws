import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import routerProgramasAcademicos from "./routers/programas";
import routerSesiones from "./routers/sesiones";
import routerProductosAcademicos from "./routers/productos";
import revisarAcceso from "./middleware/revisarAcceso";
const cors = require("cors");

const app: Express = express();
const prisma = new PrismaClient();

// Middleware

app.use(express.json());
app.use(cors());
app.use(revisarAcceso);

// Routers

app.use("/programas-academicos/", routerProgramasAcademicos);
app.use("/sesiones/", routerSesiones);
app.use("/productos-academicos/", routerProductosAcademicos);

app.get("/", (request: Request, response: Response) => {
    response.send("Bienvenido al API del sistema PNPC");
});

export default app;
