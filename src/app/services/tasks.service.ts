import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from 'src/app/models/Task';
import { Observable } from "rxjs/Observable";
import { TokenInterceptorService } from 'src/app/services/auth/token-interceptor.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient,
    private tokenInterceptor: TokenInterceptorService) {}

    private url='https://prueba9231132.herokuapp.com/tasks';
    
    public getTask(){
      return this.http.get(this.url, {headers: new HttpHeaders()});
     }
}