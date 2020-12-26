import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/data-model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isLoaded:boolean = false;
  @Input('users') users:User[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isLoaded= true;
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:User){
    this.viewHandler.emit({data});
  }

}