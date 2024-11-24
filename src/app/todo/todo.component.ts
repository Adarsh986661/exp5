import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  todos: Todo[] = [];
  newTodo: string = '';

  
  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = ''; 
    }
  }  
  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
