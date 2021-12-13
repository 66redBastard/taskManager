import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [LayoutSidebarComponent, HomeComponent, AdminComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzLayoutModule,
    NzSliderModule,
    NzBreadCrumbModule,
    NzIconModule,
  ],
})
export class AccountModule {}
