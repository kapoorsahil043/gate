import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../data-model/Category';

@Injectable()
export class CategoryService {
  categories:Category[] = [];
  constructor() { }

  getCategories():Observable<Category[]> {
    const categories = this.categories;
    return of(categories);
  }

  saveCategory(data:Category){
    let id = this.categories && this.categories ? this.categories.length + 1 : 1;
    this.categories.push({
      categoryId:id,
      category:data.category,
    });
  }

  updateCategory(data: Category) {
    //throw new Error('Method not implemented.');
  }
}
