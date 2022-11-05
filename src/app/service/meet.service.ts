import { Meet } from './../components/meet/meet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  private baseUrl = "https://back-taller-electiva-2.herokuapp.com/meets";

  constructor(private httpMeet: HttpClient) { }

  obtenerLisMeet():Observable<Meet[]>{
    return this.httpMeet.get<Meet[]>(`${this.baseUrl}`)
  }

  registerMeet(meet:Meet):Observable<Object>{
    return this.httpMeet.post(`${this.baseUrl}`,meet);
  }

  updateMeet(id:number, meet: Meet): Observable<Object>{
    return this.httpMeet.put(`${this.baseUrl}/${id}`,meet);
  }

  obtenerMeetId(id:number):Observable<Meet>{
    return this.httpMeet.get<Meet>(`${this.baseUrl}/${id}`);
  }

  deleteMeet(id:number):Observable<Object>{
    return this.httpMeet.delete(`${this.baseUrl}/${id}`);
  }

}
