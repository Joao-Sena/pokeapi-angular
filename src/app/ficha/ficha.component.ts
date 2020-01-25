import { Component, OnInit, Input } from '@angular/core';
// IMPORTAR, É O QUE FAZ IDENTIFICAR QUE A PÁGINA FOI ACESSADA ATRAVÉS DAS ROTAS DO .TYPESCRIPT, E IDENTIFICAR OS QUERYPARAMS
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    this.consultaPokemonHeader();
  }

  ngOnInit() { this.listaPokemons = JSON.parse(localStorage.getItem('pokemons')); }

  // LISTA A FICHA DO POKEMON QUANDO O USUÁRIO CLICOU NA PÁGINA HOME, pois é redirecionado para a página FICHA
  consultaPokemonHeader(){ 
    const url: string = "https://pokeapi.co/api/v2/pokemon/" + this.nomePokemon;
    
    this.http.get(url).subscribe( (response: any) =>{

      this.fichaPokemon = response;

    }, (error: any) =>{

      this.fichaPokemon = 'erro';

    })
   }

  // LISTA POKEMON quando o usuário já está na página ficha e não precisa ser redirecionado para a mesma
  consultarPokemon(){
    let pokemonEscolhido: string = (<HTMLInputElement>document.getElementById('pokemonEscolhido')).value;
    let nomeFinal = pokemonEscolhido.toLowerCase();

    const url: string = "https://pokeapi.co/api/v2/pokemon/" + nomeFinal;
    
    this.http.get(url).subscribe( (response: any) =>{

      this.fichaPokemon = response;

    }, (error: any) =>{

      this.fichaPokemon = 'erro';

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

  escondeExibeItem(id){
    // Criação de uma accordionList porém na mão apenas utilizando D-NONE para exibir ou esconder de acordo com o (click)
    var divInformacoes = (<HTMLElement>document.getElementById(id));
    divInformacoes.classList.toggle('d-none');
  }

}
