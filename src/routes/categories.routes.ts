// Fazer requesição e executar serviço
import { Router } from 'express';
import { CreateCategorieService } from '../service/createCategoryService';
import { CategoriesRepository } from '../repositories/categoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// const categories: Category[] = [];
// rota cria categoria de carro
categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;

  // eslint-disable-next-line prettier/prettier
  const createCategorieService = new CreateCategorieService(categoriesRepository);
  createCategorieService.execute({ name, description });
  return res.status(201).send(); // status criado
});
// get all categories
categoriesRoutes.get('/categories', (req, res) => {
  const allList = categoriesRepository.list();

  return res.status(200).json(allList);
});
// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
