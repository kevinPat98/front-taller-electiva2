import { RoomService } from './../../../service/room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id:number;
  room : Room = new Room();

  constructor(private roomService: RoomService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roomService.obtenerRoomId(this.id).subscribe(dato =>{
      this.room = dato;
    },error => console.log(error));
  }

  irAlaListaDeSalas(){
    this.router.navigate(['/rooms']);
    swal('Sala actualizada',`La sala ${this.room.description} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.roomService.updateRoom(this.id,this.room).subscribe(dato => {
      this.irAlaListaDeSalas();
    },error => console.log(error));
  }

}
