import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActService } from 'src/app/service/act.service';
import swal from 'sweetalert2';
import { Act } from '../act';

@Component({
  selector: 'app-act-details',
  templateUrl: './act-details.component.html',
  styleUrls: ['./act-details.component.css']
})
export class ActDetailsComponent implements OnInit {

  id:number;
  act: Act;
  constructor(private route:ActivatedRoute, private actService:ActService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.act = new Act();
    this.actService.obtenerActaId(this.id).subscribe(dato => {
      this.act = dato;
      swal(`Detalles del Acta ${this.act.description}`);
    })
  }

}
