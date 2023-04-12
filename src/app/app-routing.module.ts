import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  //le especificamos que si
  //ingresan a localhost:4000 los redirija a localhost:4000/home
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'home',
    component: HomePageComponent,
    //asi agregamos una lista de rutas hijas
    children:[
      {
        path:'hijo', // localhost:4000/home/hijo
        component: HomePageComponent // aqui agregariamos el componente hijo
      }
    ]
  },
  {
    path:'contacts',
    component: ContactsPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contacts/:id', //Sub ruta de contacts
    component: ContactDetailPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
