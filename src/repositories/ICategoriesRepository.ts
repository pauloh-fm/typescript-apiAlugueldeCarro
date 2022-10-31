// contrato - SOLID - Principio de substituição

import { Category } from '../model/category';

interface IcategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: IcategoryDTO): void;
}

// eslint-disable-next-line import/prefer-default-export
export { ICategoriesRepository, IcategoryDTO };
