import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuepassComponent } from './valuepass/valuepass.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ValuefetchComponent } from './valuefetch/valuefetch.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path:'',component:ValuepassComponent},
  // {path:'reactive',component:ReactiveComponent},

  // {path:'valuepass',component:ValuepassComponent},


  {path:'valuefetch/:name',component:ValuefetchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
