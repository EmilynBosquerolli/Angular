import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItaComponent } from './ita/ita.component';
import { HttpClientModule } from '@angular/common/http';
import { GoodJokesComponent } from './good-jokes/good-jokes.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    ItaComponent,
    GoodJokesComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
