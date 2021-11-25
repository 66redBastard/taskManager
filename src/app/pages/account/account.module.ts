import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { DemoNgZorroAntdModule } from '../../nz-zorro-antd.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, LayoutComponent, AdminComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoNgZorroAntdModule,
    NzFormModule,
    NzLayoutModule,
  ],
})
export class AccountModule {}
