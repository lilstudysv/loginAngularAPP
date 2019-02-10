import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage : TokenStorageService,
              private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
