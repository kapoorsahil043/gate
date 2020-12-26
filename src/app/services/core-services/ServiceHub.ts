declare var window: any;

import { HttpClient } from "@angular/common/http";
import { AJAXService } from "./AJAXService";
import { ErrorType } from "./ErrorType";
import { ServiceHubPoint } from "./ServiceHubPoint";
import { ServiceHubType } from "./ServiceHubType";
import { ServiceType } from "./ServiceType";

export class ServiceHub {
  // public static hubType: ServiceHubType = ServiceHubType.MFP_SERVICE;
  public static hubType: ServiceHubType = ServiceHubType.AJAX_SERVICE;
  public static serviceName: string;
  public static http: HttpClient; //Angular does not allow uas to create new instance of Http object
  //we assign that object from app.ts

  public static getDataByServiceAll(serviceType: ServiceType,parameters: Array<any>,invocationContext: any,
    successCallback: (result: any) => void,
    failCallback: (errorType: ErrorType,errorMsg: any,errorData: any,internalDescription?: any) => void,
    http?:HttpClient): void {
    console.log("log::ServiceHub,getDataByServiceAll");

    let temporarySuccess: any = function (result: any) {
      console.log("log::ServiceHub,temporarySuccess,result",result);
      
      if(result){
        if(result.status === 200){
          successCallback(result.body);
        }else if(result.status === 503){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 401 ){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 302 || 308){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 404){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else{
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message","Error Data","Error Internal Discription");
          } 
        }
      }else{
        if(failCallback){
          failCallback(ErrorType.ERROR_COMMON,"Error Message","Error Data","Error Internal Discription");
        }
      }
    };

    let temporaryFail: any = function (result: any) {
      console.log("log::ServiceHub,temporaryFail,result",result);
      if(result){
        if(result.status === 503){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 401 ){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 302 || 308){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else if(result.status === 404){
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message,"+result.status,"Error Data","Error Internal Discription");
          }
        }else{
          if(failCallback){
            failCallback(ErrorType.ERROR_COMMON,"Error Message","Error Data","Error Internal Discription");
          } 
        }
      }else{
        if(failCallback){
          failCallback(ErrorType.ERROR_COMMON,"Error Message","Error Data","Error Internal Discription");
        }
      }
    };

    let servicePoint: ServiceHubPoint = null;
    switch (ServiceHub.hubType) {
      case ServiceHubType.MFP_SERVICE:
        //servicePoint = new MFPService();
        break;
      case ServiceHubType.AJAX_SERVICE:
        console.log("log::ServiceHub,switch");
        servicePoint = new AJAXService(http);
        break;
    }

    console.log("log::ServiceHub,servicePoint ", servicePoint);

    if (servicePoint) {
        servicePoint.getDataByService(serviceType,parameters,invocationContext,temporarySuccess,temporaryFail);
    }
  }

  static gotoNotFoundPage() {
    // setTimeout(function () {
    //   $(".preloader").fadeOut();
    // }, 500);

    // $(".not-found-wrapper").css("display", "block");
    // $(".page-level1-container").css("display", "none");
  }
}
