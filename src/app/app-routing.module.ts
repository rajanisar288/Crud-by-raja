import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpoductComponent } from './mycomponent/addpoduct/addpoduct.component';

const routes: Routes = [
  { path: 'product', component: AddpoductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
