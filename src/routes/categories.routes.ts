import { Router } from 'express';
import { CategoriesRepository } from '../repositories/categoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// const categories: Category[] = [];
// rota cria categoria de carro
categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;
  if (categoriesRepository.findByName(name)) {
    return res.status(400).json({ msg: 'Categoria já existe' });
  }
  categoriesRepository.create({ name, description });

  return res.status(201).send(); // status criado
});
// get all categories
categoriesRoutes.get('/categories', (req, res) => {
  const allList = categoriesRepository.list();

  return res.status(200).json(allList);
});
// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
