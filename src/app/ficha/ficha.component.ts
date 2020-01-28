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

  // QUANDO O USUÁRIO VEM DA PÁGINA HOME
  getFichaPokemon(){ 
    this.fichaPokemon = JSON.parse(localStorage.getItem('fichaPokemon'));
   }

  escondeExibeItem(id: any){
    // Criação de uma accordionList porém na mão apenas utilizando D-NONE para exibir ou esconder de acordo com o (click)
    let divInformacoes = (<HTMLElement>document.getElementById(id));
    divInformacoes.classList.toggle('d-none');
  }

}
