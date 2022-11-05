import swal from 'sweetalert2';
import { MeetService } from './../../../service/meet.service';
import { Component, OnInit } from '@angular/core';
import { Meet } from '../meet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-meets',
  templateUrl: './list-meets.component.html',
  styleUrls: ['./list-meets.component.css']
})
export class ListMeetsComponent implements OnInit {

  meets: Meet[];
  constructor(private MeetService: MeetService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerMeet();
  }

  updateMeet(id:number){
    this.router.navigate(['update-meet',id]);
  }

  deleteMeet(id:number){
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la Reunion',
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
        this.MeetService.deleteMeet(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMeet();
          swal(
            'Reunion eliminada',
            'La Reunion ha sido eliminada con exito',
            'success'
          );
        });
      }
    })
  }

  private obtenerMeet(){
    this.MeetService.obtenerLisMeet().subscribe(dato => {
      console.log(dato);
      this.meets = dato;
    });
  }

  detailsMeet(id: number){
    this.router.navigate(['details-meet',id]);
  }

}
