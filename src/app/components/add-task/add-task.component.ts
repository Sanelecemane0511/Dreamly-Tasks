import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text = '';
  priority: Task['priority'] = 'med';
  dueDate = '';

  constructor(private ts: TaskService) {}

  submit(): void {
    if (!this.text.trim()) return;
    this.ts.addTask(this.text, this.priority, this.dueDate || undefined);
    this.text = '';
    this.dueDate = '';
  }
}