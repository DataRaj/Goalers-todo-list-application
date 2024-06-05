import React, { createContext, useState, ReactNode } from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (name: string) => void;
  updateTask: (id: number, name: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  error: string;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>('');

  const addTask = (name: string) => {
    if (tasks.some(task => task.name === name)) {
      setError('Task already exists, please create a new one.');
      return;
    }
    setError('');
    setTasks([...tasks, { id: Date.now(), name, completed: false }]);
  };

  const updateTask = (id: number, name: string) => {
    if (tasks.some(task => task.id !== id && task.name === name)) {
      setError('Task already exists, please choose a different name.');
      return;
    }
    setError('');
    setTasks(tasks.map(task => (task.id === id ? { ...task, name } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTaskCompletion, error }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
