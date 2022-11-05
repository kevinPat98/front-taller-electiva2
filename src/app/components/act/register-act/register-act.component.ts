import { MeetService } from './../../../service/meet.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActService } from 'src/app/service/act.service';
import { Meet } from '../../meet/meet';
import { Act } from '../act';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-act',
  templateUrl: './register-act.component.html',
  styleUrls: ['./register-act.component.css']
})
export class RegisterActComponent implements OnInit {

  meets: Meet[];
  act : Act = new Act();
  selectedObject : number;

  constructor(private actService: ActService, private router:Router, private meetService: MeetService) { }

  ngOnInit(): void {
    this.obtenerMeet();
  }

  saveAct(){
     this.selectedObject= +this.act.meet;
     this.meetService.obtenerMeetId(this.selectedObject).subscribe(dato => {
       this.act.meet = dato;
       this.actService.registerAct(this.act).subscribe(dato => {
         console.log(dato);
         this.irListAct();
         swal('Acta Guardada', `El Acta ${this.act.description} ha sido guardada con exito`,`success`);
       }, error => console.log(error));
     })
    // console.log(this.act);
    // this.actService.registerAct(this.act).subscribe(dato => {
    //   console.log(dato);
    //   this.irListAct();
    // }, error => console.log(error));
  }

  irListAct(){
    this.router.navigate(['/acts'])
  }

  onSubmit(){
    this.saveAct();
  }

  private obtenerMeet(){
    this.meetService.obtenerLisMeet().subscribe(dato => {
      this.meets = dato;
    });
  }
}
