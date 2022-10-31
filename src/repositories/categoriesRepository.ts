// repositorio para manipular os dados
// metodos são criados aqui
import { Category } from '../model/category';
// DTO - data transfer objects - objeto para transferir dados (entre uma classe e outra) para pegar valores da rota e devolverem no repo

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

  // criando metodo para exibir uma list de todas as categorias
  list(): Category[] {
    return this.categories;
  }

  // criando um findbyname
  findByName(name: string): Category | undefined {
    return this.categories.find(category => category.name === name);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CategoriesRepository };
