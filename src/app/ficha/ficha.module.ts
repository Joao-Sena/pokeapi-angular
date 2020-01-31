import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaComponent } from './ficha.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    FichaComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
})
export class FichaModule { }
