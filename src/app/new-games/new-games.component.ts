import { Component, OnInit } from '@angular/core';


import { GameService } from '../game.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {
  public game;
  public gameCategories = [];
  public other = [];

  constructor(private gameServ: GameService) { }

  ngOnInit() {

    this.gameServ.getGames().subscribe(data => {
      this.game = data;
      console.log(this.game.categories)

     
    })
  }



}
