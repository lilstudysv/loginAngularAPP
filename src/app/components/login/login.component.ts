import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NgForm } from '@angular/forms';
import { LoginInterface } from 'src/app/models/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private loginService: LoginService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  private login: LoginInterface = {
    username: '',
    password: ''
  }
  ngOnInit() { }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value)
    this.loginService.getLogin$(loginForm.value).subscribe(
      response => {
        if (response.status == 200) {
          this.tokenStorage.saveToken(response.headers.get("Authorization"));
          this.router.navigate(['/home']);
        }
        else {
          alert("Datos incorrectos");
        }
      },
      err => {
        alert("Datos incorrectos2");
      }
    );
  }
}
