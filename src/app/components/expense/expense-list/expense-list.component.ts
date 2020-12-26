import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpandSubscriber } from 'rxjs/internal/operators/expand';
import { Expense } from 'src/app/data-model/Expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  
  isLoaded:boolean = false;
  @Input('expenses') expenses:Expense[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {
    this.isLoaded= true;
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:Expense){
    this.viewHandler.emit({data});
  }

}
