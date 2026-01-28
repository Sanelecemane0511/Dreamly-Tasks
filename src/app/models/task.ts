export interface Task {
  id: number;
  text: string;
  done: boolean;
  priority: 'low' | 'med' | 'high';
  dueDate?: string; 
  notes?: string; 
}