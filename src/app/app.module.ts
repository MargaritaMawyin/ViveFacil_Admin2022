import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesionesComponent } from './components/profesiones/profesiones.component';
import { PlanesProveedoresComponent } from './components/planes-proveedores/planes-proveedores.component';
import { RolesComponent } from './components/roles/roles.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { PromocionComponent } from './components/promocion/promocion.component';
import { PlanesComponent } from './components/planes/planes.component';
import { InsigniasComponent } from './components/insignias/insignias.component';
import { CuponesComponent } from './components/cupones/cupones.component';
import { NotificacionesPushComponent } from './components/notificaciones-push/notificaciones-push.component';
import { SolicitudesProfesionesComponent } from './components/solicitudes-profesiones/solicitudes-profesiones.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { CategoriasComponent } from './components/servicios/categorias/categorias.component';
import { SubCategoriasComponent } from './components/servicios/sub-categorias/sub-categorias.component';
import { CargosComponent } from './components/pagos/cargos/cargos.component';
import { EfectivoComponent } from './components/pagos/efectivo/efectivo.component';
import { TarjetaComponent } from './components/pagos/tarjeta/tarjeta.component';
import { PendientesComponent } from './components/cuentas/pendientes/pendientes.component';
import { ProveedoresComponent } from './components/cuentas/proveedores/proveedores.component';
import { SolicitantesComponent } from './components/cuentas/solicitantes/solicitantes.component';
import { AdministradoresComponent } from './components/cuentas/administradores/administradores.component';
import { SugerenciasLeidasComponent } from './components/sugerencias/sugerencias-leidas/sugerencias-leidas.component';
import { SugerenciasNoLeidasComponent } from './components/sugerencias/sugerencias-no-leidas/sugerencias-no-leidas.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PoliticasComponent,
    ProfesionesComponent,
    PlanesProveedoresComponent,
    RolesComponent,
    PublicidadComponent,
    PromocionComponent,
    PlanesComponent,
    InsigniasComponent,
    CuponesComponent,
    NotificacionesPushComponent,
    SolicitudesProfesionesComponent,
    CategoriasComponent,
    SubCategoriasComponent,
    CargosComponent,
    EfectivoComponent,
    TarjetaComponent,
    PendientesComponent,
    ProveedoresComponent,
    SolicitantesComponent,
    AdministradoresComponent,
    SugerenciasLeidasComponent,
    SugerenciasNoLeidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
