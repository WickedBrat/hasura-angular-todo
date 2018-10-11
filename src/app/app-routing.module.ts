import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './list/add-item/add-item.component';
import { ViewItemComponent } from './list/view-item/view-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-item',
    pathMatch: 'full'
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  {
    path: 'view-item',
    component: ViewItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
