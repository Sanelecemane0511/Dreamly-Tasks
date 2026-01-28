import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  private sub = new Subscription();

  constructor(private ts: TaskService) {}

  ngOnInit(): void {
    this.refresh();
    // listen to ANY change made anywhere
    this.sub.add(this.ts.taskChanged$.subscribe(() => this.refresh()));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  refresh(): void {
    this.tasks = this.ts.getTasks().slice().reverse();
  }

  select(id: number): void {
    this.ts.openDetail(id);   
  }

  get highTasks(): Task[] { return this.tasks.filter(t => t.priority === 'high'); }
  get medTasks(): Task[]  { return this.tasks.filter(t => t.priority === 'med'); }
  get lowTasks(): Task[]  { return this.tasks.filter(t => t.priority === 'low'); }
}