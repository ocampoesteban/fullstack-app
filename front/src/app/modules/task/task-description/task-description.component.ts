import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.sass']
})
export class TaskDescriptionComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute
  ) { }
  
  taskIDSelected:string;
  sub$: any;

  
  ngOnInit() {
    this.sub$ =  this.getParamURL();
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

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
