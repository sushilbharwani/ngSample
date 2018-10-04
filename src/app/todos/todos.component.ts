import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  showTodo = false;
  constructor() { }

  ngOnInit() {
  }

  showForm() {

    if (this.showTodo) {
      this.showTodo = false;
    } else {
      this.showTodo = true;
    }

   console.log('Will show the form');
  }

}
