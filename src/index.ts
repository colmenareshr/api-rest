import express, { Request, Response, NextFunction   }  from "express";

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send ({ foo: 'Probando' });
});

app.listen(3000, () => {
  console.log('Aplicación rodando en la puerta 3000!')
})