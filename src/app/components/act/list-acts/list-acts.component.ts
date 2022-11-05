import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActService } from 'src/app/service/act.service';
import swal from 'sweetalert2';
import { Act } from '../act';

@Component({
  selector: 'app-list-acts',
  templateUrl: './list-acts.component.html',
  styleUrls: ['./list-acts.component.css']
})
export class ListActsComponent implements OnInit {

  acts: Act[];
  constructor(private ActService: ActService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerAct();
  }

  updateAct(id:number){
    this.router.navigate(['update-act',id]);
  }

  deleteAct(id:number){
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
        this.ActService.deleteAct(id).subscribe(dato => {
          console.log(dato);
          this.obtenerAct();
          swal(
            'Acta eliminada',
            'El Acta ha sido eliminada con exito',
            'success'
          );
        });
      }
    })
  }

  private obtenerAct(){
    this.ActService.obtenerLisAct().subscribe(dato => {
      this.acts = dato;
    });
  }

  detailsAct(id: number){
    this.router.navigate(['details-act',id]);
  }
}
