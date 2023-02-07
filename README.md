
# PNPC WS

Servicio Web para el sistema del PNPC.



## Dependencias

* Node v16 o superior
## Instalación



Clona el proyecto usando:

```bash
  git clone https://alethetwin.com/luisvilla/pnpc-ws.git
```

Una vez con el proyecto descargado deberás instalar los módulos de node usando:

```bash
  npm ci
```

Ahora deberás generar el cliente de prisma con el siguiente comando:

```bash
  npx prisma generate
```

Crea un archivo .env en la raíz del proyecto, este es un ejemplo de cómo debes crearlo:

```bash
#Se define la url para la conexión con la base de datos
DATABASE_URL="mysql://some_user:some_password@db_host:d_port/db_schema"

#Se define la clave secreta con la cual se van a encriptar los tokens de acceso
API_KEY="some-secret-and-secure-key"
```

## Correr localmente (Desarrollo)


Inicia el ws con el comando:

```bash
  npm run dev
```
## Correr (producción)

Para ejecutar en modo de producción deberá ejecutar el comando:
```bash
  npm start
```
## De ayuda

El acceso a datos en este proyecto se hace a través del framework Prisma.io, puedes revisar la documentación [aquí](https://www.prisma.io/)

