import { RoomService } from './../../../service/room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css'],
})
export class ListRoomsComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerRoom();
  }

  updateRoom(id: number) {
    this.router.navigate(['update-room', id]);
  }

  deleteRoom(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la Sala',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.roomService.deleteRoom(id).subscribe((dato) => {
          console.log(dato);
          this.obtenerRoom();
          swal(
            'Sala eliminada',
            'La Sala ha sido eliminado con exito',
            'success'
          );
        });
      }
    });
  }

  private obtenerRoom() {
    this.roomService.obtenerLisRoom().subscribe((dato) => {
      this.rooms = dato;
      console.log(this.rooms);
    });
  }

  detailsRoom(id: number) {
    this.router.navigate(['details-room', id]);
  }
}
