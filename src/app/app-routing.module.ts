import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { TodosComponent } from 'src/app/todos/todos.component';


const routes: Routes =
[
  {path: '',  component: HomeComponent},
  {path: 'about',  component: AboutComponent},
  {path: 'todos',  component: TodosComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
