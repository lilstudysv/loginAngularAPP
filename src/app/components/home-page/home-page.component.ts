import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log("ola");
    this.getPost2();
  }
  
  public tasks;

  getPost2(){
    this.loginService.getLogin2$().subscribe(
      response => {
        if(response.status==200){     
          console.log(response);
          console.log(response.body);
          this.tasks=response.body;
          this.tasks=[1,2,3,4,5,6,7,8,9,0,0,1];
        }
        else{
          alert("Datos incorrectos");
        }
      },
      err => {
        alert("Datos incorrectos2");
      }
     );
  }


}
