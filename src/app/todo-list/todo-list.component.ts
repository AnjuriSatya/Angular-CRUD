import { Component, OnInit } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:any;
  todoInput="";
  constructor(private ts:TodoService) { }

  ngOnInit(): void {
 this.todos = this.ts.todoList;
  }
  // addTask(){
  //   this.ts.addTodo(this.todoInput);
  //   this.todoInput = ''; 
  //  }
  //  resetForm(){
  //   this.todoInput = '';
  //  }
  removeTodo(index:any){
    this.ts.deleteTodo(index)
  }
  removeTodoComp()
  {

  }

  
  }
