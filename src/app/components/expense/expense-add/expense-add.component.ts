import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { Expense } from 'src/app/data-model/Expense';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  @Input('is-view') isView:boolean;
  @Input('expenses') expenses:Expense[];
  @Input('expense') expense:Expense;
  @Input('categories') categories:Category[];

  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
    console.log('IncomeAddComponent,isView',this.isView);
  }

  add(){
    let temp:Expense = this.expense;
    this.addHandler.emit(temp);
  }

  close(){
    this.closeHandler.emit();
  }

}
