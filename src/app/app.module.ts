import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NumericonlyDirective } from './numericonly.directive';
import { AlphabetsonlyDirective } from './alphabetsonly.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientPipe } from './patient.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule, DatePipe } from '@angular/common';
import { PositivenumbersDirective } from './positivenumbers.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DatepipePipe } from './datepipe.pipe';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientsComponent,
    NavBarComponent,
    NumericonlyDirective,
    AlphabetsonlyDirective,
    PatientPipe,
    PositivenumbersDirective,
    ModalComponent,
    ConfirmationDialogComponent,
    DatepipePipe,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,ToastrModule.forRoot(),CommonModule,
    MatDialogModule ,MatIconModule,HttpClientModule
  ],
  providers: [DatepipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
