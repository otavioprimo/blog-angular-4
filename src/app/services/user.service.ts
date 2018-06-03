import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api/v1';
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  public login(usuario: string, senha: string): Promise<any> {
    let body = {
      usuario: usuario,
      senha: senha
    }

    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseUrl}/admin/login`, body).toPromise()
        .then((data: any) => {
          localStorage.setItem('token', data.token);
          resolve(data);
        }).catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }
}
