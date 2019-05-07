import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router) 
    { }

    public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.tokenStorage.signOut();
    location.reload();
  }

  onCheckUser(): void { 

    console.log(this.authService.getCurrentUser());
    if (this.authService.getCurrentUser() === null){
      this.isLogged = false;
    }
    else {
      this.isLogged = true;
    }
    this.isLogged=true;

  }
}
