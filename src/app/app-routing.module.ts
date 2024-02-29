import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCostAnalysisComponent } from './client/client-costAnalysis/client-costAnalysis.component';

const routes: Routes = [
  { path: 'order', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'addClient', component: ClientFormComponent},
  { path: 'listClient', component: ClientListComponent},
  { path: 'costAnalysis', component: ClientCostAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
