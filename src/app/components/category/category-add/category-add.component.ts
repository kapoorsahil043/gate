import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/data-model/Category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  @Input('is-view') isView:boolean;
  @Input('category') category:Category;

  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  
  
  constructor() { }

  ngOnInit() {
    console.log('CategoryAddComponent,isView',this.isView);
  }

  add(){
    let temp:Category = this.category;
    this.addHandler.emit(temp);
  }

  close(event?:any){
    this.closeHandler.emit();
  }

}
