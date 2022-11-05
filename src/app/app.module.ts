import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActsComponent } from './components/act/list-acts/list-acts.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterActComponent } from './components/act/register-act/register-act.component'
import { FormsModule } from '@angular/forms';
import { UpdateActComponent } from './components/act/update-act/update-act.component';
import { ActDetailsComponent } from './components/act/act-details/act-details.component';
import { ListRoomsComponent } from './components/room/list-rooms/list-rooms.component';
import { DetailsRoomComponent } from './components/room/details-room/details-room.component';
import { RegisterRoomComponent } from './components/room/register-room/register-room.component';
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';
import { DetailsMeetComponent } from './components/meet/details-meet/details-meet.component';
import { ListMeetsComponent } from './components/meet/list-meets/list-meets.component';
import { RegisterMeetComponent } from './components/meet/register-meet/register-meet.component';
import { UpdateMeetComponent } from './components/meet/update-meet/update-meet.component';

@NgModule({
  declarations: [
    AppComponent,
    ListActsComponent,
    RegisterActComponent,
    UpdateActComponent,
    ActDetailsComponent,
    ListRoomsComponent,
    DetailsRoomComponent,
    RegisterRoomComponent,
    UpdateRoomComponent,
    DetailsMeetComponent,
    ListMeetsComponent,
    RegisterMeetComponent,
    UpdateMeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
