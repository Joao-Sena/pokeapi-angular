import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPokemonsComponent } from './lista-pokemons.component';

@NgModule({
  declarations: [
    ListaPokemonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPokemonsComponent
  ]
})
export class ListaPokemonsModule { }
