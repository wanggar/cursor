export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high';
  completed: boolean;
  listId: string;
}

export interface List {
  id: string;
  name: string;
  text: string; // Add this line
}