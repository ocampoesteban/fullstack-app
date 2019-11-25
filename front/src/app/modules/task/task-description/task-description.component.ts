import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/core/models/Task';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.sass']
})
export class TaskDescriptionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  
  taskIDSelected:string;
  
  ngOnInit() {
    this.getParamURL();
  }

  /**
   * Grab path params
   * @params 
   * @return
   */
  getParamURL(){
    this.route.params.subscribe(params => {
      if (params['taskId']){
        this.taskIDSelected = params['taskId'];
      }
    })
  }
}
