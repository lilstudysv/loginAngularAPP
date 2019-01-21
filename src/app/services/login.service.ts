import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from 'src/app/models/User';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  private url='https://prueba9231132.herokuapp.com/login';

  public getLogin$(user: User):Observable<any>{


   return this.http.post<User>(this.url,user,{observe: 'response'});
  }
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