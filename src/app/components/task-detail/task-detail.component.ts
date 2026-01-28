import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  task: Task | null = null;
  edit: Partial<Task> = {};
  notes = '';                       // extra field
  private sub = new Subscription();

  constructor(private ts: TaskService) {}

  ngOnInit(): void {
    this.sub.add(
      this.ts.detailId$.subscribe(id => {
        if (id === null) { this.task = null; return; }
        this.task = this.ts.getTasks().find(t => t.id === id) || null;
        if (this.task) {
          this.edit = { ...this.task };
          this.notes = (this.task as any).notes || ''; // load old notes
        }
      })
    );
  }

  ngOnDestroy(): void { this.sub.unsubscribe(); }

  save(): void {
    if (!this.task) return;
    this.ts.updateTask(this.task.id, { ...this.edit, notes: this.notes });
    this.ts.closeDetail();
  }

  close(): void {
    this.ts.closeDetail();
  }

  delete(): void {
    if (!this.task) return;
    this.ts.deleteTask(this.task.id);
    this.ts.closeDetail();
  }
}