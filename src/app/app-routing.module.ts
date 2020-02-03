import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { AppComponent } from './app.component';

const routes: Routes=[
 { path: 'newgames', component: NewGamesComponent},
 { path: 'jackpots', component: JackpotsComponent},
 { path: 'app', component: AppComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
