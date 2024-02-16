import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AuthGuard } from './guards/auth.guard';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'listado-clientes', component: ListadoClientesComponent, canActivate: [AuthGuard] },
  { path: 'agregar-cliente', component: AgregarClienteComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
