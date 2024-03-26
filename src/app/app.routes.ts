import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarroselComponent} from './carrosel/carrosel.component'
import {CandidatarComponent} from './candidatar/candidatar.component'



export const routes: Routes = [
  { path: '', component: CarroselComponent},
  {path: 'candidatar', component: CandidatarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }