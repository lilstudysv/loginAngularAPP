import { Component, OnInit } from '@angular/core';
import { TaskInterface, Task } from 'src/app/models/Task';
import { NgForm } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private tasksService: TasksService,
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) { }

  ngOnInit() { }

  newTask(taskForm: NgForm): void {

    this.tasksService.newTask$(taskForm.value).subscribe(
      response => {
        if (response.status == 200) {
          this.router.navigate(['/home']);
        }
        else {
          alert("Datos incorrectos");
        }
      },
      err => {
        console.log(err)
        alert("Datos incorrectos2");
      }
    );
  }
}
