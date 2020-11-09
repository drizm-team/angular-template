import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../_models/generic/object.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  get$<T>(url: string, options?: IObject): Observable<T> {
    return this.http.get<T>(environment.apiUrl + url, options);
  }

  post$<T = IObject, U = IObject>(url: string, body: U, options?: IObject): Observable<T> {
    return this.http.post<T>(environment.apiUrl + url, body, options);
  }

  put$<T = IObject, U = IObject>(url: string, body: U, options?: IObject): Observable<T> {
    return this.http.put<T>(environment.apiUrl + url, body, options);
  }

  patch$<T = IObject, U = IObject>(url: string, body: U, options?: IObject): Observable<T> {
    return this.http.patch<T>(environment.apiUrl + url, body, options);
  }

  delete$<T = IObject>(url: string, options?: IObject): Observable<T> {
    return this.http.delete<T>(environment.apiUrl + url, options);
  }
}
