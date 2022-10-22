import { Router } from 'express';

import { CategoriesRepository } from '../repositories/categoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

//const categories: Category[] = [];
// rota cria categoria de carro
categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;
  categoriesRepository.create(name, description);
  
  return res.status(201).send(); // status criado
});

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
