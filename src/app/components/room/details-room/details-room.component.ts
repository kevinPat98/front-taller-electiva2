import  swal  from 'sweetalert2';
import { RoomService } from './../../../service/room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.css']
})
export class DetailsRoomComponent implements OnInit {

  id:number;
  room: Room;
  constructor(private route:ActivatedRoute, private roomService:RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.room = new Room();
    this.roomService.obtenerRoomId(this.id).subscribe(dato => {
      this.room = dato;
      console.log(this.room);
      swal(`Detalles de la sala ${this.room.description}`);
    })
  }

}
