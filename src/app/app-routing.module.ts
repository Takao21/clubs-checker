import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './login/admin/admin.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
