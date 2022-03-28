import { Component, OnInit } from '@angular/core';
import { TasksService } from 'app/services/tasks.service';
import Chart from 'chart.js';
import { subscribeOn } from 'rxjs/operators';



@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
ngOnInit(): void {
   this.countSuspended();
   this.countActive();
   this.countNonTrait();
   this.countAcheve();
}
 
constructor(private tasksService:TasksService) { 
}
countSuspended(){
    this.tasksService.getcount(true).subscribe(r=>{
        this.suspended=r['count']
    })
}
suspended:number

countActive(){
    this.tasksService.getcounte(true).subscribe(r=>{
        this.encours=r['count']
    })
}
encours:number

countNonTrait(){
    this.tasksService.getcountn(true).subscribe(r=>{
        this.nntrait=r['count']
    })
}
nntrait:number

countAcheve(){
    this.tasksService.getcounta(true).subscribe(r=>{
        this.achev=r['count']
    })
}
achev:number
}