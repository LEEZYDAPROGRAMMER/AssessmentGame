import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {
  public jackpots=[]
  constructor(private gameServ:GameService) { }

  ngOnInit() {

this.gameServ.getJackpots().subscribe(data => this.jackpots=data)
console.log(this.jackpots," the games array")
  }

  
}
