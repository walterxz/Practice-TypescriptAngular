import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PlayerService } from './services/player.service';
import { TeamTableComponent } from './team-table/team-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
