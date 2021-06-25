import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/data-model/User';
import { TypeStatus } from 'src/app/enums/TypeStatus';
import { TypeUser } from 'src/app/enums/TypeUser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input('is-view') isView:boolean;
  @Input('user') user:User;
  
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  

  typeUser = TypeUser;
  typeUserKeys = Object.keys(this.typeUser);
  
  typeStatus = TypeStatus;
  typeStatusKeys = Object.keys(this.typeStatus);

  constructor() { }

  ngOnInit() {
    console.log('UserAddComponent,isView',this.isView);
  }

  add(){
    let temp:User = this.user;
    this.addHandler.emit(temp);
  }

  close(event?:any){
    this.closeHandler.emit();
  }

}