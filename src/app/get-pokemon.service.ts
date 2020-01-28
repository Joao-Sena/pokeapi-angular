import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  emitirPokemonCriado = new EventEmitter();

  protected baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

  getPokemonHome(pokemon: any){
    const urlFinal = this.baseUrl + pokemon;
    return this.http.get(urlFinal);
  }

  getPokemonOther(pokemon: any){
    const urlFinal = this.baseUrl + pokemon;
    return this.http.get(urlFinal);
  }

  salvaPokemon(dados: any){
    this.emitirPokemonCriado.emit(dados);
  }

}
