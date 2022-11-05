import { Room } from './../components/room/room';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = "http://localhost:8080/rooms";

  constructor(private httpRoom: HttpClient) { }

  obtenerLisRoom():Observable<Room[]>{
    return this.httpRoom.get<Room[]>(`${this.baseUrl}`)
  }

  registerRoom(room:Room):Observable<Object>{
    return this.httpRoom.post(`${this.baseUrl}`,room);
  }

  updateRoom(id:number, room: Room): Observable<Object>{
    return this.httpRoom.put(`${this.baseUrl}/${id}`,room);
  }

  obtenerRoomId(id:number):Observable<Room>{
    return this.httpRoom.get<Room>(`${this.baseUrl}/${id}`);
  }

  deleteRoom(id:number):Observable<Object>{
    return this.httpRoom.delete(`${this.baseUrl}/${id}`);
  }
}
