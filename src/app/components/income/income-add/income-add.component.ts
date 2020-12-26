import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { Income } from 'src/app/data-model/Income';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.css']
})
export class IncomeAddComponent implements OnInit {

  @Input('is-view') isView:boolean;
  @Input('incomes') incomes:Income[];
  @Input('income') income:Income;
  @Input('categories') categories:Category[];

  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
    console.log('IncomeAddComponent,isView',this.isView);
  }

  add(){
    let temp:Income = this.income;
    this.addHandler.emit(temp);
  }

  close(){
    this.closeHandler.emit();
  }

}
