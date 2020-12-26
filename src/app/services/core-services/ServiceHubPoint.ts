import { ServiceType } from "./ServiceType";

export class ServiceHubPoint {
  
  public getDataByService(
    serviceType: ServiceType,
    parameters: Array<any>,
    invocationContext: any,
    successCallback: (result: any) => void,
    failCallback: (errorMessage: string) => void
  ): void {}
}
