import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { UserService } from '../service/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/service/service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SwalService } from 'src/service/swal.service';
import { ClientService } from 'src/service/client.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    Service,
    SwalService,
    UserService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }