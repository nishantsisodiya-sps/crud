import { Component, OnInit } from '@angular/core';
import {FormControl , FormBuilder , FormGroup} from '@angular/forms'
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  value = ''
  myTasks : any = []
  initialItem:any = []
  Tasktoadd !:FormGroup
  newArray : any = []
  constructor() { }



  ngOnInit(): void {
    this.Tasktoadd = new FormGroup({
      'task' : new FormControl(null)
    })


    this.gettingItem()
    
  }
  submit(val:string){
    this.value = val
    this.myTasks.push(this.value)
    localStorage.setItem('task' , JSON.stringify(this.myTasks))
    this.gettingItem()
  }


  gettingItem(){
    let tasks = localStorage.getItem('task')
    if(tasks){
      let newArr = JSON.parse(tasks)
      this.initialItem = newArr
    }
  }
  removeTask(i : any){
    this.initialItem.splice(i , 1)
    localStorage.setItem('task' , JSON.stringify(this.initialItem))
}

editItem(item:any , i:any){
  alert("this item is selecsted" + " " + item)
}
}