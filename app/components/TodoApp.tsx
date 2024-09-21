'use client';

import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { Task, List } from '../utils/types';

function TodoApp() {
  // Initialize state with empty arrays or default values
  const [tasks, setTasks] = useState<Task[]>([]);
  const [lists, setLists] = useState<List[]>([{ id: 'default', name: 'Default', text: '' }]);
  const [activeList, setActiveList] = useState<string>('default');

  // Use useEffect to load data from localStorage after component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) setTasks(JSON.parse(savedTasks));

      const savedLists = localStorage.getItem('lists');
      if (savedLists) setLists(JSON.parse(savedLists));

      const savedActiveList = localStorage.getItem('activeList');
      if (savedActiveList) setActiveList(savedActiveList);
    }
  }, []);

  // Use useEffect to save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('lists', JSON.stringify(lists));
      localStorage.setItem('activeList', activeList);
    }
  }, [tasks, lists, activeList]);

  // Function to add a new task
  const addTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to toggle task completion
  const toggleTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to add a new list
  const addList = (listName: string) => {
    const newList: List = { id: Date.now().toString(), name: listName, text: '' };
    setLists(prevLists => [...prevLists, newList]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      {/* TaskForm component for adding new tasks */}
      <TaskForm addTask={(task: string) => addTask({
        id: Date.now().toString(),
        title: task,
        completed: false,
        listId: activeList
      })} />
      {/* TaskList component for displaying and managing tasks */}
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default TodoApp;