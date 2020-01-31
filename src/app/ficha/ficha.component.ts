import { Component, OnInit, Input } from '@angular/core';

import { GetPokemonService } from '../get-pokemon.service'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  pokemon: string;
  public fichaPokemon: any;

   constructor(public getPokemonService: GetPokemonService) { 
    this.getFichaPokemon();
  }

  ngOnInit() { 
    this.getPokemonService.emitirPokemonCriado.subscribe(
      (data: any) => this.fichaPokemon = data
    );
   }

  getFichaPokemon(){ 
    this.fichaPokemon = JSON.parse(localStorage.getItem('fichaPokemon'));
   }

  escondeExibeItem(id: any){
    let divInformacoes = (<HTMLElement>document.getElementById(id));
    divInformacoes.classList.toggle('d-none');
  }

}
