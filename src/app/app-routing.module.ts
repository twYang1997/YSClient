import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ClientFormComponent } from './client/client-form/client-form.component';

const routes: Routes = [
  { path: 'order', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'addClient', component: ClientFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
