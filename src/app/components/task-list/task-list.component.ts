import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  editingId: number | null = null;
  editText = '';

  constructor(private ts: TaskService) {
    this.refresh();
  }

  refresh(): void {
    this.tasks = this.ts.getTasks();
  }

  toggle(t: Task): void {
    this.ts.toggleDone(t.id);
    this.refresh();
  }

  startEdit(t: Task): void {
    this.editingId = t.id;
    this.editText = t.text;
  }

  saveEdit(t: Task): void {
    if (this.editText.trim()) {
      this.ts.updateTask(t.id, { text: this.editText.trim() });
      this.refresh();
    }
    this.editingId = null;
  }

  cancelEdit(): void {
    this.editingId = null;
  }

  delete(id: number): void {
    this.ts.deleteTask(id);
    this.refresh();
  }

  priorityClass(p: Task['priority']): string {
    return `priority-${p}`;
  }

  isOverdue(d?: string): boolean {
    if (!d) return false;
    return new Date(d) < new Date(new Date().toDateString());
  }
}