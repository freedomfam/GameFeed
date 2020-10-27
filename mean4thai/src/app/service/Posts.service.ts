import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://localhost:4040/api/postdata';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getPostdatas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  postPostdatas(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(data), this.httpOptions);
  }
  deletePostdatas(data: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${data}`, this.httpOptions);
  }
  getshow(_id:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }
  getPostId(_id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }
}
