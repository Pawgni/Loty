import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelsListComponent } from './components/travels-list/travels-list.component';
import { AddTravelComponent } from './components/add-travel/add-travel.component';

const routes: Routes = [
  {
    path:'',
    component: TravelsListComponent
  },

  {
    path:'travels',
    component: TravelsListComponent
  }

  ,

  {
    path:'travels/add',
    component: AddTravelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
