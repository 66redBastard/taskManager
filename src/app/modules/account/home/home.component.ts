import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { User } from '../../../models/User';
import { UserService, AuthService } from '../../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = false;
  user: User;
  userFromApi!: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthService
  ) {
    this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService
      .getById(this.user.id)
      .pipe(first())
      .subscribe((user) => {
        this.loading = false;
        this.userFromApi = user;
      });
  }
  logout() {
    this.authenticationService.logout();
  }
}
