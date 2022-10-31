// Reponsabilidade unica - SOLID
// Processar dados
// Reponsabilidade - Cadastrar categoria
import { CategoriesRepository } from '../repositories/categoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategorieService {
  // private CategoriesRepository : CategoriesRepository; // substitute for private constructor
  // eslint-disable-next-line no-useless-constructor
  constructor(private categoriesRepository: CategoriesRepository) {
    // D - Dependencia inversa SOLID
    // this.categoriesRepository = categoriesRepository; // substitute for private constructor
  }

  execute({ description, name }: IRequest): void {
    if (this.categoriesRepository.findByName(name)) {
      // return res.status(400).json({ msg: 'Categoria já existe' });
      throw new Error('Categoria já existe');
    }
    this.categoriesRepository.create({ name, description });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateCategorieService };
