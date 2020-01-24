import { Component, OnInit } from '@angular/core';
// IMPORTAR PARA DIRECIONAR DE UMA PÁGINA PARA OUTRA
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  public listaPokemons: any;

  constructor(
    public router: Router,
    ) { }

  ngOnInit() { this.listaPokemons = JSON.parse(localStorage.getItem('pokemons')); }

  consultarPokemon(){

    let pokemonEscolhido: string = (<HTMLInputElement>document.getElementById('pokemonEscolhido')).value;

    let nomeFinal: string = pokemonEscolhido.toLowerCase();
    
    let msgErro = (<HTMLElement>document.getElementById('erroPokemon'));
    if(nomeFinal){
      msgErro.classList.add('d-none');
      this.router.navigate(['ficha'], {queryParams: {nomeFinal}});
    }else{
      msgErro.classList.remove('d-none');
    }

  }

}
