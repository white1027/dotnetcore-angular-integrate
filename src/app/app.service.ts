import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  private apiUrl = 'api/values';

  // Resolve HTTP using the constructor
  constructor(private _http: HttpClient) {}

  getValue(val: String): Observable<any> {
    return this._http.get(this.apiUrl + '/' + val, { responseType: 'text' });
  }
}
