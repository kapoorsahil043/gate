import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '../data-model/Expense';

@Injectable()
export class ExpenseService {

  expenses:Expense[] = [];

  constructor() { }

  getExpenses():Observable<Expense[]> {
    const expenses = this.expenses;
    return of(expenses);
  }

  saveExpense(data:Expense){
    let id = this.expenses && this.expenses ? this.expenses.length + 1 : 1;
    this.expenses.push({
      expenseId:id,
      sourceOfExpense:data.sourceOfExpense,
      amount:data.amount,
      category:data.category,
      categoryId:data.categoryId,
    });
  }
}
