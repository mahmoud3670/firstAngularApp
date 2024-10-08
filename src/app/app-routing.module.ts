import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { IndividulServerComponent } from './servers/individul-server/individul-server.component';
import { IndividulUserComponent } from './users/individul-user/individul-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { canDeactivateGuard } from './Services/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './Services/server-resolver.service';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: MainComponent },
  { path: 'employee/:id', component: EmployeeComponent },

  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: IndividulUserComponent }],
  },
  // { path: 'users/:id/:name', component: IndividulUserComponent },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [canDeactivateGuard],
      },
      {
        path: ':id',
        component: IndividulServerComponent,
        resolve: { server: ServerResolverService },
      },
    ],
  },
  // { path: 'servers/:id/edit', component: EditServerComponent },
  // { path: 'servers/:id', component: IndividulServerComponent },

  // { path: 'not-found', component: NotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'page not found',
    },
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
