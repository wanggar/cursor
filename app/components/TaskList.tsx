import React from 'react';
import { Task } from '../utils/types';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
}

function TaskList({ tasks, toggleTask }: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="mr-2 form-checkbox h-5 w-5 text-blue-600"
          />
          <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title} {/* Changed 'text' to 'title' to match the Task type */}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;