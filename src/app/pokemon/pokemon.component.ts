import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  poke: any[];

  constructor(private pokemon: PokemonService) { }

  ngOnInit() {
    this.pokemon.getCard().subscribe(res => {
      console.log(res)
    })
  }

}
