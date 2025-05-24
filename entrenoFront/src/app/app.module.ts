import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { EjercicioCardComponent } from './components/ejercicio-card/ejercicio-card.component';
import { MenuUserComponent } from './pages/menu-user/menu-user.component';
import { EjercicioMiniCardComponent } from './components/ejercicio-mini-card/ejercicio-mini-card.component';
import { CrearEntrenamientoComponent } from './pages/crear-entrenamiento/crear-entrenamiento.component';
import { EjerciciosSelectorComponent } from './components/ejercicios-selector/ejercicios-selector.component';
import { EntrenamientoMiniCardComponent } from './components/entrenamiento-mini-card/entrenamiento-mini-card.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { EntrenamientoDetalleComponent } from './components/entrenamiento-detalle/entrenamiento-detalle.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { MaestroIntensidadComponent } from './components/maestro-intensidad/maestro-intensidad.component';
import { MaestroGruposMuscularesComponent } from './components/maestro-grupos-musculares/maestro-grupos-musculares.component';
import { MaestroNivelesDificultadComponent } from './components/maestro-niveles-dificultad/maestro-niveles-dificultad.component';
import { MaestroTiposUnidadComponent } from './components/maestro-tipos-unidad/maestro-tipos-unidad.component';
import { MaestroTiposEjercicioComponent } from './components/maestro-tipos-ejercicio/maestro-tipos-ejercicio.component';
import { MaestroEquipamientosComponent } from './components/maestro-equipamientos/maestro-equipamientos.component';
import { MaestroUsuariosComponent } from './components/maestro-usuarios/maestro-usuarios.component';
import { MaestroAsignarEntrenamientosComponent } from './components/maestro-asignar-entrenamientos/maestro-asignar-entrenamientos.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

    LoginPageComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    UserProfileComponent,
    EjerciciosComponent,
    EjercicioCardComponent,
    MenuUserComponent,
    EjercicioMiniCardComponent,
    CrearEntrenamientoComponent,
    EjerciciosSelectorComponent,
    EntrenamientoMiniCardComponent,
    EntrenamientosComponent,   
    EntrenamientosComponent, EntrenamientoDetalleComponent, MaestroComponent, MaestroIntensidadComponent, MaestroGruposMuscularesComponent, MaestroNivelesDificultadComponent, MaestroTiposUnidadComponent, MaestroTiposEjercicioComponent, MaestroEquipamientosComponent, MaestroUsuariosComponent, MaestroAsignarEntrenamientosComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule, 
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
