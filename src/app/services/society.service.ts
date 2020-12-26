import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Society } from '../data-model/Society';

@Injectable()
export class SocietyService {
  societies:Society[] = [];

  constructor() { }

  get():Observable<Society[]> {
    const societies = this.societies;
    return of(societies);
  }

  save(data:Society){
    let id = this.societies && this.societies ? this.societies.length + 1 : 1;
    this.societies.push({
      societyId:id,
      name:data.name,
      address:data.address,
      city:data.city,
      contact:data.contact,
      pincode:data.pincode,
      state:data.state,
    });
  }
}
