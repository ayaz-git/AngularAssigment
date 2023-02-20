import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApisevicesService {

  constructor(public httpClient :HttpClient ) { }

  get(apiname :any){
    this.httpClient.request('GET' , apiname)
    return this.httpClient.get(apiname);
  }

  post(payload :any , apiname :any){
    this.httpClient.request('POST' , apiname)
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5',
      })
    };
    return this.httpClient.post(apiname, payload , httpOptions)
  }
  put(apiname :any){
    this.httpClient.request('PUT' , apiname)
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer 7dde72333be762bcb4e014087f525e0c30c7543630e70e40cef0aa66b98849d5',
      })
    };
    return this.httpClient.put(apiname,'', httpOptions)
  }
}
