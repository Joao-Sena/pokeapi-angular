import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaPokemons: any;

  constructor(private http: HttpClient) { this.listaPokemonsApi(); }

  ngOnInit() { }

  listaPokemonsApi(){

    const url: string = "https://pokeapi.co/api/v2/pokemon/?limit=1000";

    this.http.get(url).subscribe( (response: any) =>{

      this.listaPokemons = response.results;
      localStorage.setItem('pokemons', JSON.stringify(this.listaPokemons));

    }, (error: any) =>{
      console.error(JSON.stringify(error));
    } )

  }

}
