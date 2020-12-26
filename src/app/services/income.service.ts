import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Income } from '../data-model/Income';

@Injectable()
export class IncomeService {

  incomes:Income[] = [];

  constructor() { }

  getIncomes():Observable<Income[]> {
    const incomes = this.incomes;
    return of(incomes);
  }

  saveIncome(data:Income){
    let id = this.incomes && this.incomes ? this.incomes.length + 1 : 1;
    this.incomes.push({
      incomeId:id,
      sourceOfIncome:data.sourceOfIncome,
      amount:data.amount,
      category:data.category,
      categoryId:data.categoryId,
    });
  }
}
