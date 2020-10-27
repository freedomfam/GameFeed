import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'http://localhost:4040/api/comment';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  postComments(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(data), this.httpOptions);
  }
  getshow(_id:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }
  getPostId(_id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${_id}`);
  }
}
