import { HttpClient } from "@angular/common/http";

export class BaseService {
  httpRequest: HttpClient;
  isLoaded: boolean;

  constructor(http: HttpClient) {
    this.httpRequest = http;
    this.isLoaded = false;
  }

  loadService(url: string, callback: (any: any) => void) {
    this.httpRequest.get(url).subscribe((items) => {
      let data: any = items;
      this.parseDataForService(data);

      if (callback) {
        callback(data);
      }
      this.isLoaded = true;
    });
  }

  parseDataForService(data: any) {}
}
