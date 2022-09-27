import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{}]; 
  res.send(users)
})

//get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid
  res.status(200).send({uuid});
})

//post /users
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction)=> {
  const newUser = req.body
  res.status(200).send({newUser})
  
})

//put /users/:uuid
usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
  const uuid = req.params.uuid; 
  res.status(200).send({ uuid })
})

//delete /users/:uuid
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  res.status(204).send('Usuario Borrado con éxito')
})


export default usersRoute;