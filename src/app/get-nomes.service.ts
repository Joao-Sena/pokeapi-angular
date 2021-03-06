import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetNomesService {

  public listaPokemons: any;

  constructor(private http: HttpClient,) { }

  listaNomesPokemons(){

    const url: string = environment.base_url + "?limit=1000";

    this.http.get(url).subscribe( (response: any) =>{

      this.listaPokemons = response.results;
      localStorage.setItem('pokemons', JSON.stringify(this.listaPokemons));

    }, (error: any) =>{
      console.error(JSON.stringify(error));
    } )

  }

}
