import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnChanges {
  @Input()inpt:boolean=false

  alltask:any

  constructor(private service:TaskService){

  }

  ngOnInit(): void {
    this.service.listtask().then((res:any)=>res.json()).then(data=>this.alltask=data).catch(err =>alert("invalid list"));
    
  }
  ngOnChanges(changes: SimpleChanges):void {
    if(this.inpt){
      console.log(this.inpt);
    
     this.service.listtask().then((res:any)=>res.json()).then(data=>this.alltask=data).catch(err =>alert("invalid list"));
      } 
   }
  // ngDoCheck(): void {
  //   this.service.listtask().then((res:any)=>res.json()).then(data=>this.alltask=data);
  // }
  deleteTask(id:number){
    this.service.removeTask(id).then((res:any)=>res.json()).then(data=>console.log(data))
  }
}
