import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
// import { Role } from './models';

// import { AdminComponent } from './shared/components/admin/admin.component';
// import { HomeComponent } from './modules/account/home/home.component';

const authModule = () =>
  import('./modules/auth/auth.module').then((x) => x.AuthModule);

// const accountModule = () =>

const routes: Routes = [
  {
    path: '',
    loadChildren: authModule,
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((y) => y.AccountModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: [Role.Admin] },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
