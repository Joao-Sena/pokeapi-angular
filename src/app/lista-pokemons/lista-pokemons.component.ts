import { Component, OnInit } from '@angular/core';
// IMPORTAR PARA DIRECIONAR DE UMA PÁGINA PARA OUTRA
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.scss']
})
export class ListaPokemonsComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {}

  consultarPokemon(nomeFinal: string){
    
      this.router.navigate(['ficha'], {queryParams: {nomeFinal}});

  }

}
