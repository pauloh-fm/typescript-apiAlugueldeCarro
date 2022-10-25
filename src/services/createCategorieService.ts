import { CategoriesRepository } from "../repositories/categoriesRepository";

interface Irequest {
    name: string;
    description: string;
}
class createCategorie {
    constructor( private categoriesRepository: CategoriesRepository){};

    execute({name,description} : Irequest) : void[
        const categorieAlreadyExists = this.categoriesRepository.findByName(name);
            if (categorieAlreadyExists) {
                throw new Error("Categorie already exist!")//return res.status(400).json({ error: 'categorie already exists' });
  }
  this.categoriesRepository.create({ description, name });
    ]
}





export {createCategorie};