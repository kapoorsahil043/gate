import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoggingService {

  constructor() { }

  public info(message1?:any,message2?:any){
    console.log('info::',message1,message2);
    return of('done');
  }
}
