import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data-model/Category';
import { Expense } from 'src/app/data-model/Expense';
import { Society } from 'src/app/data-model/Society';
import { CategoryService } from 'src/app/services/category.service';
import { LoggingService } from 'src/app/services/logging.service';
import { SocietyService } from 'src/app/services/society.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  isLoaded:boolean = false;
  step: number = 1; // default list
  isEdit: boolean = false;
  isView: boolean = false;

  societies:Society[]=[];
  society: Society;
  
  constructor(private societyService:SocietyService,private loggingService:LoggingService,
    private toastrService:ToastrService,
    private categoryService:CategoryService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.loadSociety();
  }

  loadSociety() {
    this.societyService.get().subscribe((societies:Society[])=> this.societies = societies );
  }

  add(data){
    this.loggingService.info('income comp','add');
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.societyService.save(data);
        this.toastrService.success('Expense Updated');
      }else{
        this.societyService.save(data);
        this.toastrService.success('Expense Saved');
      }
    }else{
      this.society = new Society();
      this.step = 2; // render add sreen
    }
  }

  view(obj:any){
    console.log('log::view',obj);
    this.society = obj.data;
    this.step = 2; // render add sreen
    this.isView = true;
  }

  close(){
    this.step = 1; // render list sreen
    this.isView = false;
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.society = obj.data;
    this.isEdit = true;
    this.step = 2; // render add sreen
  }
}

