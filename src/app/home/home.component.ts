import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetNomesService } from '../get-nomes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaPokemons: any;

  constructor(private http: HttpClient, protected getNomes: GetNomesService) { this.listaPokemonsApi(); }

  ngOnInit() { }

  listaPokemonsApi(){

    // UTILIZANDO O PRIMEIRO LINK DA API PARA LISTA O NOME DOS POKEMONS PARA UTILIZAR COMO SUGESTÃO NO INPUT(select);
    this.getNomes.listaNomesPokemons();

  }

}
