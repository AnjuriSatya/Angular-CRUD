import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { NumericonlyDirective } from './numericonly.directive';
import { AlphabetsonlyDirective } from './alphabetsonly.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientPipe } from './patient.pipe';
import { PatientDirective } from './patient.directive';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { PositivenumbersDirective } from './positivenumbers.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DatePipePipe } from './date-pipe.pipe';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { DatePipe } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PatientsComponent,
    NavBarComponent,
    SettingsComponent,
    NumericonlyDirective,
    AlphabetsonlyDirective,
    PatientPipe,
    PatientDirective,
    PositivenumbersDirective,
    ModalComponent,
    ConfirmationDialogComponent,
    DatePipePipe,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoAppComponent,
    ConfirmDeleteComponent,
    ProductslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,ToastrModule.forRoot(),CommonModule,
    MatDialogModule ,MatIconModule
  ],
  providers: [TodoService,DatePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
