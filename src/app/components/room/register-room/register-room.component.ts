import { MeetService } from './../../../service/meet.service';
import { Meet } from './../../meet/meet';
import { RoomService } from './../../../service/room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-room',
  templateUrl: './register-room.component.html',
  styleUrls: ['./register-room.component.css']
})
export class RegisterRoomComponent implements OnInit {

  meets: Meet[];
  room : Room = new Room();
  selectedObject : number;

  constructor(private roomService: RoomService, private router:Router,private meetService: MeetService) { }

  ngOnInit(): void {
    this.obtenerMeet();
  }

  saveRoom(){
    this.roomService.registerRoom(this.room).subscribe(dato => {
      console.log(dato);
      this.irListRoom();
      swal('Reunion Guardada', `La Reunion ${this.room.description} ha sido guardada con exito`,`success`);
    }, error => console.log(error));
  }

  irListRoom(){
    this.router.navigate(['/rooms'])
  }

  onSubmit(){
    this.saveRoom();
  }

  private obtenerMeet(){
    this.meetService.obtenerLisMeet().subscribe(dato => {
      this.meets = dato;
    });
  }
}
