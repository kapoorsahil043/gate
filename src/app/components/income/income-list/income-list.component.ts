import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Income } from 'src/app/data-model/Income';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

  isLoaded:boolean = false;
  @Input('incomes') incomes:Income[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  constructor(private incomeService:IncomeService) { }

  ngOnInit() {
    this.isLoaded= true;
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:Income){
    this.viewHandler.emit({data});
  }

}
