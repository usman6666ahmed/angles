import { Component } from '@angular/core';
interface Todo {
  title: string;
  done: boolean;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodoText=  ""
  todos: Todo[] = [
    { title: 'Learn Angular', done: false, id: 1 },
    { title: 'Learn TypeScript', done: false, id: 2 },
    { title: 'Learn ASP.NET', done: false, id: 3 },
  ];

  alertMe() {
    alert('You have been alerted!');
  }

  onChange(e:any){
    this.newTodoText = e.target.value
    console.log(this.newTodoText)
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }

  newTodo() {
    this.todos.push({
      title: this.newTodoText,
      id: this.todos.length + 1,
      done: false,
    });
    this.newTodoText = "";
  }
}
