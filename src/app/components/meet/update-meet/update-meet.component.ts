import { MeetService } from './../../../service/meet.service';
import { Meet } from './../meet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-meet',
  templateUrl: './update-meet.component.html',
  styleUrls: ['./update-meet.component.css']
})
export class UpdateMeetComponent implements OnInit {

  id:number;
  meet : Meet = new Meet();

  constructor(private meetService: MeetService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.meetService.obtenerMeetId(this.id).subscribe(dato =>{
      this.meet = dato;
    },error => console.log(error));
  }

  irAlaListaDeReuniones(){
    this.router.navigate(['/meets']);
    swal('Reunion actualizada',`La Reunion ${this.meet.affair} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.meetService.updateMeet(this.id,this.meet).subscribe(dato => {
      this.irAlaListaDeReuniones();
    },error => console.log(error));
  }

}
