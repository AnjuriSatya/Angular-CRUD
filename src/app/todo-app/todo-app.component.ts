import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
 todoValue:string=''; 
 todoList:any = [
  {content:"Todo1",
   value:false
  },
  {content:"Todo2",
  value:false
 },
 {content:"Todo3",
   value:false
  },
  {content:"Todo4",
   value:false
  }
 ];
 finishedList:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(){
    this.todoList.push({content:this.todoValue,value:false})
    this.todoValue='';
  }
changeTodo(i:number){
 const item = this.todoList.splice(i,1)
 console.log(item);
 this.finishedList.push(item[0])
}
changeFinishedTodo(i:number){
  const item = this.finishedList.splice(i,1)
  console.log(item);
  this.todoList.push(item[0])
 }
deleteTodo(ind:any){
 console.log(ind,'test')
 this.todoList.splice(ind,1);

}
deletedone(indCompleted:any){
  this.finishedList.splice(indCompleted,1);
}
}
