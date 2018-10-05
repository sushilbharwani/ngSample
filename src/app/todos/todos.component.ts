import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  showTodo = false;
  todoArray;
  constructor(public todoService: TodoService) {

   }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {

    this.todoService.getAllTodos().subscribe(
      data => {
          this.todoArray = data;
          console.log(this.todoArray);
      }
    );

  }

  showForm() {

    if (this.showTodo) {
      this.showTodo = false;
    } else {
      this.showTodo = true;
    }

   console.log('Will show the form');
  }

  onSubmit(f) {
   this.todoService.addTodo(f.value).subscribe(
    data => {
      console.log(data);
      alert('Added Succesfully');
      this.getAllTodos();
    }
   );
  }

}
