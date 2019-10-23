import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  console.log('iniciando a chamada');
  const user = await User.create({
    name: 'Bruno de Oliveira',
    email: 'novoemail@gmail.com.br',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
