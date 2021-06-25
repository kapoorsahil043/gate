import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {

  step: number = 1;
  isEdit: boolean = false;
  isView: boolean = false;

  categories: Category[] = [];
  category: Category = new Category();
  

  constructor(private categoryService: CategoryService,private toastrService:ToastrService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('log::CategoryComponent,ngOnChanges');
  }

  ngOnInit() {
    console.log('log::CategoryComponent,ngOnInit');
    this.loadCategories()
  }
  
  loadCategories() {
    console.log('log::CategoryComponent,loadCategories');
    this.categoryService.getCategories().subscribe((list:Category[]) =>{
      this.categories = list;
      console.log('test')
    } );
  }

  add(data?:Category){
    console.log('log::CategoryComponent,add',data);
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.categoryService.updateCategory(data); // update record
        this.toastrService.success('Category Updated');
      }else{
        this.categoryService.saveCategory(data); // add new record
        this.toastrService.success('Category Saved');
      }
    }else{
      this.category = new Category();
      this.step = 2; // render add sreen
    }
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.step = 2; // render add sreen
    this.category = obj.data;
    this.isEdit = true;
  }

  view(obj:any){
    console.log('log::view',obj);
    this.step = 2; // render add sreen
    this.category = obj.data;
    this.isView = true;
  }

  close(event?:any){
    console.log('log::close');
    this.step = 1; // render list sreen
    this.isView = false;
  }
}
