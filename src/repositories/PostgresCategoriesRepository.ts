/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { Category } from '../model/category';

import { ICategoriesRepository, IcategoryDTO } from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  // sub class
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }

  list(): Category[] {
    throw new Error('Method not implemented.');
  }

  create({ name, description }: IcategoryDTO): void {
    throw new Error('Method not implemented.');
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PostgresCategoriesRepository };
