// repositorio para manipular os dados
import { Category } from '../model/category';
// DTO - data transfer objects - objeto para transferir dados

interface IcategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: IcategoryDTO): void {
    const categorie = new Category(); // assim pra usar o constructor
    Object.assign(categorie, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(categorie);
  }
}

export { CategoriesRepository };
