import express, { Request, Response, NextFunction   }  from "express";
import usersRoute from './routes/users.routes'
import statusRoute from './routes/status.routes'
const app = express();

//Configuración de la aplicación
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuración de las rutas
app.use(usersRoute)
app.use(statusRoute)

//Inicializar el servidor
app.listen(3000, () => {
  console.log('Aplicación rodando en la puerta 3000!')
})