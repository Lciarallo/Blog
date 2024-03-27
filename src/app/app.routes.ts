import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatarComponent } from './candidatar/candidatar.component';
import { CarroselComponent } from './carrosel/carrosel.component';


export const routes: Routes = [
  { path: 'candidatar', component: CandidatarComponent },
  { path: '', component: CarroselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
