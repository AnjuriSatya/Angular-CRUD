import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { TodoComponent } from './todo/todo.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'patients', component:PatientsComponent},
{ path: 'nav-bar', component:NavBarComponent},
{ path: 'settings', component:SettingsComponent},
{ path: 'todo', component:TodoComponent},
{path:'products', component:ProductsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  


 }
  