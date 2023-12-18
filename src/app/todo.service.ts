import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId = 5;
  todoList:any=[
   
    {"id":1,"task":"task1"},
    {"id":1,"task":"task2"},
    {"id":1,"task":"task3"}, 
    {"id":1,"task":"task4"}
   
  ];
  finishedList = [
    
  ];

  constructor() { }
  addTodo(taskName:any){
 this.todoList.push({"id":this.taskId++,"task":taskName});
  }
  deleteTodo(index:number){
this.todoList.splice(index,1);
 
}
}