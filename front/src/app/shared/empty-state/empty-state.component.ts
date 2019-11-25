import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.sass']
})
export class EmptyStateComponent implements OnInit {
  
  @Input() isEmpty: boolean;
  message:string = 'There is not task created yet';

  constructor() { }

  ngOnInit() {
    this.getMessage()
  }

  getMessage(){
    if (this.isEmpty){
      this.message = "There is not task selected yet"
    }
  }

}
