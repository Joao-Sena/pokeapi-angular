import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GetNomesService } from '../get-nomes.service';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  pokemon: string;
  public listaPokemons: any;

  constructor( 
    public router: Router, 
    protected getPokemon: GetPokemonService,
    protected getNomes: GetNomesService,
    ) { this.getNomes.listaNomesPokemons(); }

  ngOnInit() { this.listaPokemons = JSON.parse(localStorage.getItem('pokemons')); }

  validaInput(){

    let msgErro = (<HTMLElement>document.getElementById('erroPokemon'));

    if(this.pokemon){
      msgErro.classList.add('d-none');
      this.consultarPokemon();
    }else{
      msgErro.classList.remove('d-none');
    }

  }

  consultarPokemon(){

    if(this.router.url == '/home'){

      let getFichaPokemon: any = this.getPokemon.getPokemonHome(this.pokemon.toLowerCase());
      getFichaPokemon.subscribe((response: any) => {

        localStorage.setItem('fichaPokemon', JSON.stringify(response));
        this.router.navigate(['ficha']);

      }, (error: any) =>{ 
        localStorage.setItem('fichaPokemon', JSON.stringify('erro') ); 
        this.router.navigate(['ficha']);
      });
      
    }else{
      
      let getFichaPokemon: any = this.getPokemon.getPokemonOther(this.pokemon.toLowerCase());
      getFichaPokemon.subscribe((response: any) => {

        this.getPokemon.salvaPokemon(response);

      }, (error: any) =>{ 
        this.getPokemon.salvaPokemon('erro');
      })
    }

  }

}
