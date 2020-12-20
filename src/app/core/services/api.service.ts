import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private header:HttpHeaders;
  constructor(protected http:HttpClient) { 
    this.header=new HttpHeaders();
    this.header.append('content-type', 'application/json');
  }

  getAll(path: string): Observable<any[]> {
    return this.http
      .get(`${environment.apiUrl}${path}`)
      .pipe(map((resp) => resp as any[]));
  }
   
  getOne(path: string, id?: number): Observable<any> {
    let getUrl: string;
    if (id) {
      getUrl = `${environment.apiUrl}${path}` + '/' + id;
    } else {
      getUrl = `${environment.apiUrl}${path}`;
    }
    return this.http.get(getUrl).pipe(map((resp) => resp as any));
  }
  
  //For post method
  create(path: string, resource: any, options?: any): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, resource, { headers: this.header })
      .pipe(map((response) => response));
  }

  // update(path: string, resource:any, options?:any):Observable<any>{
  //   return this.http.put(`${environment.apiUrl}${path}`, resource).map(response=>{

  //   })
  // }
}
