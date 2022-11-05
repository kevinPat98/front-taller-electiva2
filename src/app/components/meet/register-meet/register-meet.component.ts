import { RoomService } from './../../../service/room.service';
import { Room } from './../../room/room';
import { MeetService } from './../../../service/meet.service';
import { Meet } from './../meet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-meet',
  templateUrl: './register-meet.component.html',
  styleUrls: ['./register-meet.component.css']
})
export class RegisterMeetComponent implements OnInit {

  rooms: Room[];
  meet : Meet = new Meet();
  selectedObject : number;

  constructor(private meetService: MeetService, private router:Router, private roomService: RoomService) { }

  ngOnInit(): void {
    this.obtenerRoom();
  }

  saveMeet(){
    this.selectedObject= +this.meet.room;
    this.roomService.obtenerRoomId(this.selectedObject).subscribe(dato => {
       this.meet.room= dato;
       this.meetService.registerMeet(this.meet).subscribe(dato => {
        console.log(dato);
        this.irListMeet();
        swal('Sala Guardada', `La Sala ${this.meet.affair} ha sido guardada con exito`,`success`);
      }, error => console.log(error));
     })
  }

  irListMeet(){
    this.router.navigate(['/meets'])
  }

  onSubmit(){
    this.saveMeet();
  }

  private obtenerRoom(){
    this.roomService.obtenerLisRoom().subscribe(dato => {
      this.rooms = dato;
    });
  }

}
