import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskInterface } from 'src/app/models/Task';
import { Observable } from "rxjs/Observable";
import { TokenInterceptorService } from 'src/app/services/auth/token-interceptor.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
    private tokenInterceptor: TokenInterceptorService) { }

  private url = 'https://prueba9231132.herokuapp.com/tasks';
  
  public selectedTask: TaskInterface = {
    id: null,
    state: null,
    topic: null,
    kind: null,
    title: '',
    description: '',
    price: null,
    creator: null,
    resolver: null
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  public getAllTasks() {
    return this.http.get(this.url, { headers: new HttpHeaders() });
  }



  public goTask2$(task2: TaskInterface): Observable<any> {
    return this.http.post<TaskInterface>(this.url, task2, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    });
  }

  public newTask$(task: TaskInterface): Observable<any> {
    console.log(task);
    task.creator=8;
    return this.http
      .post<TaskInterface>(this.url, task, { headers: this.headers, observe: 'response' })
      .pipe(map(data => data));
  }

  public deleteTask$(idTask: string): Observable<any> {
    return this.http
      .post<TaskInterface>(this.url, idTask, { headers: this.headers, observe: 'response' })
      .pipe(map(data => data));
  }
}