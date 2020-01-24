import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// IMPORTAR, É O QUE FAZ IDENTIFICAR QUE A PÁGINA FOI ACESSADA ATRAVÉS DAS ROTAS DO .TYPESCRIPT, E IDENTIFICAR OS QUERYPARAMS
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  public listaPokemons: any;
  private nomePokemon: any;
  public fichaPokemon: any;
  public erro: number = 0;

   // CONSTRUIR A VARIÁVEL, E JOGAR O QUE VEM ATRAVÉS DO QUERYPARAMS NO 'DATA' E NA VARIÁVEL QUE QUISER. ATRAVÉS DO OBSERVABLE SUBSCRIBE
   constructor(public activatedRoute: ActivatedRoute, private http: HttpClient) { 
    this.activatedRoute.queryParams.subscribe((data)=>{
      this.nomePokemon = data.nomeFinal;
    })
    this.listaFichaPokemon();
  }

  ngOnInit() { this.listaPokemons = JSON.parse(localStorage.getItem('pokemons')); }

  async listaFichaPokemon(){

    const url: string = "https://pokeapi.co/api/v2/pokemon/" + this.nomePokemon;
    
    this.http.get(url).subscribe( (response: any) =>{
      
      this.fichaPokemon = response;

    }, (error: any) =>{
      // console.error(JSON.stringify(error));
      this.fichaPokemon = null;
      
    })

  }

  validaInputVazio(){
    let pokemonEscolhido: string = (<HTMLInputElement>document.getElementById('pokemonEscolhido')).value;
    let nomeFinal = pokemonEscolhido.toLowerCase();
    let msgErro = (<HTMLElement>document.getElementById('erroPokemon'));

    if(nomeFinal){
      msgErro.classList.add('d-none');
      this.consultarPokemon();
    }else{
      msgErro.classList.remove('d-none');
    }
  }

  consultarPokemon(){
    let pokemonEscolhido: string = (<HTMLInputElement>document.getElementById('pokemonEscolhido')).value;
    let nomeFinal = pokemonEscolhido.toLowerCase();

    const url: string = "https://pokeapi.co/api/v2/pokemon/" + nomeFinal;

    this.http.get(url).subscribe( (response: any) =>{
      
      this.fichaPokemon = response;

    }, (error: any) =>{
      // console.error(JSON.stringify(error));
      // Apenas para não aparecer a DIV de ERRO, pois tem um *ngIf nela
      this.fichaPokemon = null;
    })

  }

  escondeExibeItem(id){
    // Criação de uma accordionList porém na mão apenas utilizando D-NONE para exibir ou esconder de acordo com o (click)
    var divInformacoes = (<HTMLElement>document.getElementById(id));
    divInformacoes.classList.toggle('d-none');
  }

}
