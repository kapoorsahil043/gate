import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { Income } from 'src/app/data-model/Income';
import { CategoryService } from 'src/app/services/category.service';
import { IncomeService } from 'src/app/services/income.service';
import { LoggingService } from 'src/app/services/logging.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  isLoaded:boolean = false;
  step: number = 1; // default list
  isEdit: boolean = false;
  isView: boolean = false;

  categories:Category[]=[];
  incomes:Income[]=[];
  income: Income;
  
  constructor(private incomeService:IncomeService,private loggingService:LoggingService,private toastrService:ToastrService,
    private categoryService:CategoryService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.loadIncomes();
    this.loadCategories();
  }

  loadIncomes() {
    this.incomeService.getIncomes().subscribe((incomes:Income[])=> this.incomes = incomes );
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((categories:Category[])=> this.categories = categories );
  }

  add(data){
    this.loggingService.info('income comp','add');
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.incomeService.saveIncome(data);
        this.toastrService.success('Income Updated');
      }else{
        this.incomeService.saveIncome(data);
        this.toastrService.success('Income Saved');
      }
    }else{
      this.income = new Income();
      this.step = 2; // render add sreen
    }
  }

  view(obj:any){
    console.log('log::view',obj);
    this.income = obj.data;
    this.step = 2; // render add sreen
    this.isView = true;
  }

  close(){
    this.step = 1; // render list sreen
    this.isView = false;
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.income = obj.data;
    this.isEdit = true;
    this.step = 2; // render add sreen
  }

}
