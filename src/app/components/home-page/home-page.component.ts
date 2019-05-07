import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loginService: LoginService,
    private taskService: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.getAllTasks();
  }

  public tasks: Task[] = [];

  getAllTasks() {
    this.taskService.getAllTasks().subscribe((
      response: any[]) => {
      this.tasks = response;
    },
      err => {
        console.log(err);
        alert("Datos incorrectos2");
      }
    );
  }

  onPreUpdateTask() {

  }

  onDeleteTask(id: string): void {
    if(confirm('Segure que quieres eliminarlo?')){
      this.taskService.deleteTask$(id).subscribe();
    }
  }

  viewTask() {
    const task = new Task(1, 1, 1, 1, "", "", 2, null, null);
    this.router.navigate(['/tasks/' + task.id]);
    /*this.taskService.goTask2(task).subscribe(
      response => {
        //console.log('/tasks/' + task.id);
        
      })
      */
  }

}
