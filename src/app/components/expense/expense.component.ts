import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { Expense } from 'src/app/data-model/Expense';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { LoggingService } from 'src/app/services/logging.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  isLoaded:boolean = false;
  step: number = 1; // default list
  isEdit: boolean = false;
  isView: boolean = false;

  categories:Category[]=[];
  expenses:Expense[]=[];
  expense: Expense;
  
  constructor(private expenseService:ExpenseService,private loggingService:LoggingService,
    private toastrService:ToastrService,
    private categoryService:CategoryService) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.isLoaded = true;
    this.loadExpenses();
    this.loadCategories();
  }

  loadExpenses() {
    console.log('loadExpenses')
    this.expenseService.getExpenses().subscribe((expenses:Expense[])=> this.expenses = expenses );
  }

  loadCategories() {
    console.log('this.loadCategories')
    this.categoryService.getCategories().subscribe((categories:Category[])=> {this.categories = categories ; console.log('this.loadCategories, inside')} );
  }

  add(data){
    this.loggingService.info('income comp','add');
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.expenseService.saveExpense(data);
        this.toastrService.success('Expense Updated');
      }else{
        this.expenseService.saveExpense(data);
        this.toastrService.success('Expense Saved');
      }
    }else{
      this.expense = new Expense();
      this.step = 2; // render add sreen
    }
  }

  view(obj:any){
    console.log('log::view',obj);
    this.expense = obj.data;
    this.step = 2; // render add sreen
    this.isView = true;
  }

  close(event?:any){
    this.step = 1; // render list sreen
    this.isView = false;
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.expense = obj.data;
    this.isEdit = true;
    this.step = 2; // render add sreen
  }

}