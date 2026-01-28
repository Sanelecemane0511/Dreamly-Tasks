import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { Task } from '../models/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = this.load();
  private nextId = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
  private _taskChanged = new BehaviorSubject<void>(undefined);
  readonly taskChanged$ = this._taskChanged.asObservable();
  private _detailId = new BehaviorSubject<number | null>(null);
  readonly detailId$ = this._detailId.asObservable();

  openDetail(id: number): void        { this._detailId.next(id); }
  closeDetail(): void                 { this._detailId.next(null); }

  /* ---------- API ---------- */
  getTasks(): Task[] { return [...this.tasks]; }

  addTask(text: string, priority: Task['priority'], dueDate?: string): void {
    this.tasks.push({ id: this.nextId++, text: text.trim(), done: false, priority, dueDate });
    this.save();
    this._taskChanged.next();
  }

  updateTask(id: number, changes: Partial<Task>): void {
    const idx = this.tasks.findIndex(t => t.id === id);
    if (idx === -1) return;
    this.tasks[idx] = { ...this.tasks[idx], ...changes };
    this.save();
    this._taskChanged.next();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
    this._taskChanged.next();
  }

  toggleDone(id: number): void {
    const t = this.tasks.find(t => t.id === id);
    if (t) { t.done = !t.done; this.save(); this._taskChanged.next(); }
  }

  /* ---------- localStorage ---------- */
  private readonly KEY = 'dreamly-tasks';

  private save(): void {
    localStorage.setItem(this.KEY, JSON.stringify(this.tasks));
  }

  private load(): Task[] {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}