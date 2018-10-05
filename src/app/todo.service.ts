import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }

  getAllTodos() {

    return this.http.get('http://localhost:7000/api/todos').pipe(
      data => {
          return data;
      }
    );

  }

  addTodo(f) {

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new HttpParams()
    .set('title', f.title)
    .set('description', f.description);

    return this.http.post('http://localhost:7000/api/todos', body, {headers: headers}).pipe(
      data => {
        return data;
      }
    );

  }
}
