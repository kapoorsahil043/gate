import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  isLoaded:boolean = false;
  @Input('categories') categories:Category[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  constructor(private incomeService:CategoryService) { }

  ngOnInit() {
    this.isLoaded= true;
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:Category){
    this.viewHandler.emit({data});
  }

}