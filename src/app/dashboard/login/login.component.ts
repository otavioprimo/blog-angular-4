import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.isAuthenticated())
      this.router.navigate(['dashboard']);
  }

  login(): void {
    if (this.usuario && this.senha) {
      this.userService.login(this.usuario, this.senha)
        .then((data: any) => {
          if (data) {
            this.router.navigate(['dashboard']);
          }
        }).catch(err => {

        });
    }
  }

}
