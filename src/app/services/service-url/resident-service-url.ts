import { HttpHeaders } from '@angular/common/http';
import { ServiceType } from '../core-services/ServiceType';

export class ResidentServiceUrl{

    public static getServiceUrlByServiceType(serviceType: ServiceType, parameters?: Array<any>, baseurl?: string): string {
        let reqHeader:any = {
            'Accept' : 'application/json',
            'Accept-Language' : 'en'
        };
        let serviceUrl: string = null;
        let reqMethod: string = 'get';

        switch (serviceType) {
            case ServiceType.SERVICE_RESIDENTS:
                serviceUrl = ServiceType.SERVICE_RESIDENTS+"";
                serviceUrl = baseurl + serviceUrl; // NOTE: if you want to all 3rd party service.. make baseURL as empty
                reqHeader.PageId =  'RESIDENTS';
            break;
        }

         let requestProcedureObject:any = {
            serviceUrl: serviceUrl,
            reqMethod: reqMethod,
            reqHeader: reqHeader
        };

        return requestProcedureObject;
    }
}