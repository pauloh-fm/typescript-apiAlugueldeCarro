import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const server = express();
server.use(express.json()); // para utilizar o servidor

server.get('/', (req, res) => {
  return res.json({ msg: 'Server Funcionando' });
});
server.use(categoriesRoutes);

server.listen(3333, () => console.log('Server running'));
