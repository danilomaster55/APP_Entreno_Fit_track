import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { MenuUserComponent } from './pages/menu-user/menu-user.component';
import { CrearEntrenamientoComponent } from './pages/crear-entrenamiento/crear-entrenamiento.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { MaestroComponent } from './pages/maestro/maestro.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginPageComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'perfil', component: UserProfileComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'menu-user', component: MenuUserComponent },
  { path: 'crear-entrenamiento', component: CrearEntrenamientoComponent },
  { path: 'entrenamientos', component: EntrenamientosComponent},
  { path: 'maestro', component: MaestroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
