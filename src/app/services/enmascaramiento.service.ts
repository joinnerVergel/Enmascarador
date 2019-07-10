import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { urlRedirect, urlMiddleLayer } from './url';



@Injectable({
  providedIn: 'root'
})
export class EnmascaramientoService {

  constructor(private http: HttpClient) { }

  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      })
    };
    return httpOptions;

  }
  getLinkRedireccionamiento(data:any){
    let datos:any={
      url:urlRedirect,
      objeto:data,
      metodo:"post"
    }
    return this.http.post<any>(urlMiddleLayer, datos, this.getHttpOptions()).pipe();
  }
}
