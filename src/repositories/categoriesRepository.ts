// repositorio para mecher no banco de dados
import { Category } from "../model/category";
//DTO - data transfer objects - objeto para transferir dados

interface IcategoryDTO {
    name: string;
    description: string;
}
class CategoriesRepository {
    private categories: Category[];

    constructor{
        this.categories = [];
    }
    
    create({description, name}: IcategoryDTO) : void{

        const category = new Category(); // assim pra usar o constructor
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

}

export {CategoriesRepository}