import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loginService: LoginService,
              private taskService: TasksService) { }

  ngOnInit() {
    this.get();
  }
  
  public tasks: Task[] =[];

  get(){
    this.taskService.getTask().subscribe((response: any[]) => {
        console.log(response);
        this.tasks=response;
        console.log(this.tasks[1].id);

      },
      err => {
        alert("Datos incorrectos2");
        console.log(err);
      }
     );  
  }
}
