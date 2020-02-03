import { Injectable } from '@angular/core';
import { IGames } from './game';
import { Observable } from 'rxjs/internal/Observable';
import { IJackpots } from './Jackpot';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _urlg: string="http://stage.whgstage.com/front-end-test/games.php";
  private _urlj: string="http://stage.whgstage.com/front-end-test/jackpots.php";
  
  constructor(private http:HttpClient) { }
  
  getJackpots(): Observable<IJackpots[]>
  {

    return this.http.get<IJackpots[]>(this._urlj);
  }
  getGames(): Observable<IGames[]>
  {

   return this.http.get<IGames[]>(this._urlg);
  }
}
