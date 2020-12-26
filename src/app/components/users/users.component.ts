import { Component, OnInit } from '@angular/core';
import { Society } from 'src/app/data-model/Society';
import { User } from 'src/app/data-model/User';
import { CategoryService } from 'src/app/services/category.service';
import { LoggingService } from 'src/app/services/logging.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isLoaded:boolean = false;
  step: number = 1; // default list
  isEdit: boolean = false;
  isView: boolean = false;

  users:User[]=[];
  user: User;
  
  constructor(private userService:UserService,private loggingService:LoggingService,
    private toastrService:ToastrService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.loadSociety();
  }

  loadSociety() {
    this.userService.get().subscribe((users:User[])=> this.users = users );
  }

  add(data){
    this.loggingService.info('income comp','add');
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.userService.save(data);
        this.toastrService.success('Expense Updated');
      }else{
        this.userService.save(data);
        this.toastrService.success('Expense Saved');
      }
    }else{
      this.user = new Society();
      this.step = 2; // render add sreen
    }
  }

  view(obj:any){
    console.log('log::view',obj);
    this.user = obj.data;
    this.step = 2; // render add sreen
    this.isView = true;
  }

  close(){
    this.step = 1; // render list sreen
    this.isView = false;
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.user = obj.data;
    this.isEdit = true;
    this.step = 2; // render add sreen
  }
}