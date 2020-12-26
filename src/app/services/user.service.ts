import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../data-model/User';
import { TypeUser } from '../enums/TypeUser';

@Injectable()
export class UserService {
  users:User[] = [];

  constructor() { }

  get():Observable<User[]> {
    const list = this.users;
    return of(list);
  }

  save(data:User){
    let id = this.users && this.users ? this.users.length + 1 : 1;
    this.users.push({
      userId:id,
      contact:data.contact,
      password:data.password,
      societyId:data.societyId,
      status:data.status,
      type:data.type,
      userName:data.userName,
    });
  }
}
