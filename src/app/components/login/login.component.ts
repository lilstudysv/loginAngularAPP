import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(private loginService: LoginService) { }

  ngOnInit() {}
  
  getPost(){
    const user = new User(
      "pablo",
      "pablo"
    );
    
    this.loginService.getLogin$(user).subscribe(
      resp => {
        console.log('User:' + resp.headers.get('X-Custom-Header'));
        console.log('User2:' + JSON.stringify(resp));
        console.log('User2:' +  JSON.stringify(resp.headers));

      }
      ,
      err => console.error('Ops: ' + err.message)
    );  
  }

  

}
