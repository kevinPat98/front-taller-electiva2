import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActService } from 'src/app/service/act.service';
import swal from 'sweetalert2';
import { Act } from '../act';

@Component({
  selector: 'app-update-act',
  templateUrl: './update-act.component.html',
  styleUrls: ['./update-act.component.css']
})
export class UpdateActComponent implements OnInit {

  id:number;
  act : Act = new Act();

  constructor(private actService: ActService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actService.obtenerActaId(this.id).subscribe(dato =>{
      this.act = dato;
    },error => console.log(error));
  }

  irAlaListaDeActas(){
    this.router.navigate(['/acts']);
    swal('Acta actualizada',`El acta ${this.act.description} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.actService.updateAct(this.id,this.act).subscribe(dato => {
      this.irAlaListaDeActas();
    },error => console.log(error));
  }
}
