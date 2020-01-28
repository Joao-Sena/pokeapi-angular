import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.scss']
})
export class ListaPokemonsComponent implements OnInit {

  constructor( public router: Router, protected getPokemon: GetPokemonService ) { }

  ngOnInit() {}

  consultaPokemon(nomePokemon: string){
    let getFichaPokemon: any = this.getPokemon.getPokemonHome(nomePokemon);
      getFichaPokemon.subscribe((response: any) => {

        localStorage.setItem('fichaPokemon', JSON.stringify(response));
        this.router.navigate(['ficha']);

      }, (error: any) =>{ 
        localStorage.setItem('fichaPokemon', JSON.stringify('erro') ); 
        this.router.navigate(['ficha']);
      });
  }

}
