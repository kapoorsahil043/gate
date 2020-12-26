import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ServiceHubPoint } from "./ServiceHubPoint";
import { ServiceType } from "./ServiceType";

import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { ResidentServiceUrl } from '../service-url/resident-service-url';

declare let moment: any;

export class AJAXService extends ServiceHubPoint {
  httpRequest: HttpClient;
  isMultipart: Boolean = false;

  constructor(private http: HttpClient) {
    super();
    this.httpRequest = http;
  }

  public getDataByService(serviceType: ServiceType,parameters: Array<any>,invocationContext: any,
    successCallback: (result: any) => void,
    failCallback: (errorMessage: any) => void): void {
    console.log("log::AJAXService,getDataByService");
    //super.getDataByService(serviceType,parameters,invocationContext,successCallback,failCallback);
    let baseurl: string = this.prepareBaseUrl(serviceType);
    let moduleid: string = null;
    let requestProcedureObject:any;
    
    //let account: any = GlobalVariableService.account;
    
    requestProcedureObject = this.prepareRequestProcedureObject(serviceType,baseurl);
    
    if(requestProcedureObject.reqMethod == "post" || requestProcedureObject.reqMethod == "put" || requestProcedureObject.reqMethod == "get") {
			if (true) {
				requestProcedureObject.reqHeader.ChannelAuthCode =  'Test';
        requestProcedureObject.reqHeader.ChannelTime = moment().toISOString();
        requestProcedureObject.reqHeader.DeviceId = (<any>window).uniqueDeviceId;
			}
    }
    
    if (requestProcedureObject.serviceUrl) {
        this.invokeService(requestProcedureObject,successCallback,failCallback);
    }
  }

  invokeService(requestProcedureObject,successCallback: (result: any) => void,failCallback: (errorMessage: any) => void):void{

    switch(requestProcedureObject.reqMethod){
      case 'get':
        this.httpRequest.get(requestProcedureObject.serviceUrl,
          {observe:"response",headers:requestProcedureObject.reqHeader}).subscribe(data =>{
          successCallback(data);
          //return data.body;
        },(err) => {
          console.log('log::this.invokeService,err',err)
          failCallback(err);
        });
        break;

        case 'post':
        this.httpRequest.post(
          requestProcedureObject.serviceUrl,
          requestProcedureObject.reqBody,
          {observe:"response",headers:requestProcedureObject.reqHeader}).subscribe(data =>{
          successCallback(data);
          //return data.body;
        },(err) => {
          console.log('log::this.invokeService,err',err)
          failCallback(err);
        });
        break;
        
        case 'put':
          this.httpRequest.put(
            requestProcedureObject.serviceUrl,
            requestProcedureObject.reqBody,
            {observe:"response",headers:requestProcedureObject.reqHeader}).subscribe(data =>{
            successCallback(data);
            //return data.body;
          },(err) => {
            console.log('log::this.invokeService,err',err)
            failCallback(err);
          });
        break;

        case 'delete':
          this.httpRequest.delete(
            requestProcedureObject.serviceUrl,
            requestProcedureObject.reqHeader,
            ).subscribe(data =>{
            successCallback(data);
            //return data.body;
          },(err) => {
            console.log('log::this.invokeService,err',err)
            failCallback(err);
          });
          break;

    }
    
  }

  prepareBaseUrl(serviceType): string {
    let baseUrl = window.location.protocol + "//" + 
    window.location.hostname + ":" + 
    window.location.port + "/";

    return baseUrl;
  }

  prepareRequestProcedureObject(serviceType,baseurl){
    let requestProcedureObject:any = {}
    switch (serviceType) {
      case ServiceType.SERVICE_RESIDENTS:
        requestProcedureObject = ResidentServiceUrl.getServiceUrlByServiceType(ServiceType.SERVICE_RESIDENTS, [], baseurl)
        break;
    }
    return requestProcedureObject;
  }
}