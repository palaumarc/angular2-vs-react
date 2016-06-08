import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MeteocatService {

  private url = 'http://10.116.12.245:8080/ApiRestInterna/xema/v1/mesurades/metadades/estacions';

  constructor(private http: Http) {};

  getData(): Promise<String[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  };

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}