import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component'; // NEW

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskDetailComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }