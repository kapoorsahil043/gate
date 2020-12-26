import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { fromJS, Map, List } from 'immutable';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Resident } from '../data-model/Resident';
import { CloneService } from './clone.service';
import { BaseService } from './core-services/BaseService';
import { ErrorType } from './core-services/ErrorType';
import { ServiceHub } from './core-services/ServiceHub';
import { ServiceType } from './core-services/ServiceType';
import { LoggingService } from './logging.service';

@Injectable()
export class ResidentService extends BaseService {
  

  public static TYPE_RESIDENT_SUMMARY: string = "TYPE_RESIDENT_SUMMARY".toLocaleLowerCase();

  actingServiceState: string;
  failedCallback: any;
  successCallback: any;

  residentSummary: any;

  residents:Resident[] = []; 

  // immutable example 
  immutableResidents = List<Resident>(this.residents);

  constructor(private http: HttpClient,private loggingService:LoggingService,private cloneService:CloneService) {
    super(http);
  }

  getResidents():Observable<Resident[]> {
    // cloning option #1
    // const residents = JSON.parse(JSON.stringfy(this.residents));

    // cloning option #2 - immutable
    //const residents  = this.immutableResidents.toArray();

    //ServiceHub.getDataByServiceAll(ServiceType.SERVICE_RESIDENTS, [], {}, this.successHandler.bind(this), this.failHandler.bind(this));
    const residents = this.residents

    return of(residents);


  }

  getResident(residentId:number):Observable<Resident>{
    return this.getResidents()
      .pipe(
        map(residents => {
          const filteredResidents = residents.filter(resident => resident.residentId === residentId);
          if (filteredResidents) {
            const resident = filteredResidents[0];
            return resident;

            // immutable
            //return fromJS(resident).toJS() as Resident;
          }
        })
      );
  }

  updateResident(data: Resident) {
    
  }

  saveResident(data: Resident) {
    //this.loggingService.info(this,data).subscribe();
    let residentId = this.residents && this.residents ? this.residents.length + 1 : 1;
    this.residents.push({
    residentId:residentId,
    soceityId: data.soceityId,
    wing: data.wing,
    vehicleId: data.vehicle,
    flat: data.flat,
    name: data.name, 
    type: data.type,
    contact: data.contact,
    vehicle: data.vehicle, 
    parkingId: data.parkingId,
    familyMembers:data.familyMembers,
    maintenanceAmt:data.maintenanceAmt,
    });
  }

  successHandler(result: any): void {
    console.log("log::this.successHandler",this.actingServiceState);
    switch (this.actingServiceState) {
      case ResidentService.TYPE_RESIDENT_SUMMARY:
        let resei: Resident = new Resident();
        resei = result["results"];
        console.log("resei,",resei.contact);
        break;
    }

    if (this.successCallback) {
      this.successCallback();
    }
  }

  failHandler(
    errorType: ErrorType,
    errorData: any,
    resultData: any,
    internalDescription: any
  ): void {
    console.log("log::this.failHandler");
    if (this.failedCallback) {
      this.failedCallback(
        errorType,
        errorData,
        resultData,
        internalDescription
      );
    }
  }

  getResidentSummary() {
    console.log('log::getResidentSummary')

    this.actingServiceState = ResidentService.TYPE_RESIDENT_SUMMARY

    ServiceHub.getDataByServiceAll(ServiceType.SERVICE_RESIDENTS, [], {}, 
    this.successHandler.bind(this), 
    this.failHandler.bind(this),
    this.http);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}