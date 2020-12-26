import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../data-model/User';

@Injectable()
export class AuthService {
  currentUser: User;

  constructor() { }

  public login(user:User){
    this.currentUser = {
      userName:"sahil",
      userId:1,
      societyId:1,
    }
  }

  logOut() {
  }

  public isAuthenticated(){
    return !!this.currentUser;
  }

  getCurrentUser():Observable<User>{
    return of(this.currentUser);
  }
}
