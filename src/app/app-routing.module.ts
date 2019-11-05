import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItaComponent } from './ita/ita.component';
import { GoodJokesComponent } from './good-jokes/good-jokes.component';
import { from } from 'rxjs';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  {path: '', component: PokemonComponent},
   {path: 'good', component : GoodJokesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
