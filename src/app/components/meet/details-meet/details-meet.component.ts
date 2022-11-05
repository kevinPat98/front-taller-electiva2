import { MeetService } from './../../../service/meet.service';
import { Meet } from './../meet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-meet',
  templateUrl: './details-meet.component.html',
  styleUrls: ['./details-meet.component.css']
})
export class DetailsMeetComponent implements OnInit {

  id:number;
  meet: Meet;
  constructor(private route:ActivatedRoute, private meetService:MeetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.meet = new Meet();
    this.meetService.obtenerMeetId(this.id).subscribe(dato => {
      this.meet = dato;
      swal(`Detalles de la reunion ${this.meet.affair}`);
    })
  }

}
