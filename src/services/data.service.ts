import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };
  private api_server = "http://localhost:3000/"
  constructor(private httpClient:HttpClient) { }

  public apiPost(data,url):any{
    let finalurl = this.api_server+url;
    return this.httpClient.post(finalurl,data,this.httpOptions);
  }

  public apiGet(url):any{
    let finalurl = this.api_server+url;
    return this.httpClient.get(finalurl,this.httpOptions);
  }
}
