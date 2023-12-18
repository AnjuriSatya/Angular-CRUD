import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  
  
  todoInput ="";

  constructor(private ts:TodoService) { 

  }
  addTask(){
    this.ts.addTodo(this.todoInput);
    this.todoInput='';
   }
   resetForm(){
    this.todoInput = '';
   }

  ngOnInit(): void{
  }

}
