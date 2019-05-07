import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { Observable } from "rxjs/Observable";
import { TokenInterceptorService } from 'src/app/services/auth/token-interceptor.service';

const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json'),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private tokenInterceptor: TokenInterceptorService) { }

  private url = 'https://prueba9231132.herokuapp.com/login';
  private url2 = 'https://prueba9231132.herokuapp.com/users';

  public getLogin$(user: User): Observable<any> {
    return this.http.post<User>(this.url, user, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }

  public getLogin2$(): Observable<any> {
    return this.http.get(this.url2, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }

  /*
  https://stackoverflow.com/questions/48777244/angular-5-http-client-has-authorization-missing-from-the-response-header
  https://github.com/angular/angular/issues/13554
  */
  /*
    export class GlobalStoreService {
      private state: GlobalState = { token: '', loginNeeded: false };
      private token$ = new BehaviorSubject<string>(this.state.token);
      private loginNeeded$ = new BehaviorSubject<boolean>(this.state.loginNeeded);
      constructor() {}
      public selectToken$ = (): Observable<string> => this.token$.asObservable();
      public selectLoginNeeded$ = (): Observable<boolean> => this.loginNeeded$.asObservable();
      public dispatchToken = (token: string) => {
        this.state.token = token;
        this.token$.next(this.state.token);
      };
      public dispatchLoginNeeded = (loginNeeded: boolean) => {
        this.state.loginNeeded = loginNeeded;
        this.loginNeeded$.next(this.state.loginNeeded);
      };
    }*/
}