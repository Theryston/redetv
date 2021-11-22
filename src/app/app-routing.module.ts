import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './pages/dev/dev.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: DevComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
