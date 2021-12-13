import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutSidebarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
