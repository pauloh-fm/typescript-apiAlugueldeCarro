// class category
import { v4 as uuidV4 } from 'uuid';

class Category {
  name: string;

  description: string;

  id?: string; // não existe uuid

  // eslint-disable-next-line camelcase
  created_at: Date;

  // metodo para classes

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

// eslint-disable-next-line prettier/prettier, import/prefer-default-export
export  { Category };
