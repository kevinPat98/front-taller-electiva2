import { DetailsRoomComponent } from './components/room/details-room/details-room.component';
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';
import { RegisterRoomComponent } from './components/room/register-room/register-room.component';
import { ListRoomsComponent } from './components/room/list-rooms/list-rooms.component';
import { DetailsMeetComponent } from './components/meet/details-meet/details-meet.component';
import { UpdateMeetComponent } from './components/meet/update-meet/update-meet.component';
import { RegisterMeetComponent } from './components/meet/register-meet/register-meet.component';
import { ListMeetsComponent } from './components/meet/list-meets/list-meets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActDetailsComponent } from './components/act/act-details/act-details.component';
import { ListActsComponent } from './components/act/list-acts/list-acts.component';
import { RegisterActComponent } from './components/act/register-act/register-act.component';
import { UpdateActComponent } from './components/act/update-act/update-act.component';

const routes: Routes = [
  {path : 'meets', component:ListMeetsComponent},
  {path: '', redirectTo: 'meets', pathMatch:'full'},
  {path : 'register-meet', component: RegisterMeetComponent},
  {path : 'update-meet/:id', component:UpdateMeetComponent},
  {path : 'details-meet/:id', component:DetailsMeetComponent},
  {path : 'acts', component:ListActsComponent},
  {path : 'register-act', component: RegisterActComponent},
  {path : 'update-act/:id', component:UpdateActComponent},
  {path : 'details-act/:id', component:ActDetailsComponent},
  {path : 'rooms', component:ListRoomsComponent},
  {path : 'register-room', component: RegisterRoomComponent},
  {path : 'update-room/:id', component:UpdateRoomComponent},
  {path : 'details-room/:id', component:DetailsRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
