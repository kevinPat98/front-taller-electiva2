import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Act } from '../components/act/act';

@Injectable({
  providedIn: 'root'
})
export class ActService {

  private baseUrl = "http://localhost:8080/acts";

  constructor(private httpAct: HttpClient) { }

  obtenerLisAct():Observable<Act[]>{
    return this.httpAct.get<Act[]>(`${this.baseUrl}`)
  }

  registerAct(act:Act):Observable<Object>{
    return this.httpAct.post(`${this.baseUrl}`,act);
  }

  updateAct(id:number, act: Act): Observable<Object>{
    return this.httpAct.put(`${this.baseUrl}/${id}`,act);
  }

  obtenerActaId(id:number):Observable<Act>{
    return this.httpAct.get<Act>(`${this.baseUrl}/${id}`);
  }

  deleteAct(id:number):Observable<Object>{
    return this.httpAct.delete(`${this.baseUrl}/${id}`);
  }

}
