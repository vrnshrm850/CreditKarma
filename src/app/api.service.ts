import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ApiService{
path = 'http://localhost:3000';
  constructor(private http: HttpClient){

  }

  getCards(userId: any): Observable<any>{
  return ;

  }
}
