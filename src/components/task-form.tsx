import React, { useState, useContext } from 'react';
import { TaskContext } from '../util/task-provider';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask, error } = useContext(TaskContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
      <div className='flex flex-col py-5 px-3  '>
        <form onSubmit={handleSubmit}>
          <input
            className='w-full py-2 px-3 rounded-md bg-slate-900 text-slate-200'
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
          <button
          className='w-full py-2 mt-2 bg-slate-900 text-slate-200 rounded-md'
          type="submit">Add Task</button>
          {error && <p className=' mt-2 font-medium text-red-700'>{error}</p>}
        </form>
     </div>
  );
};

export default TaskForm;
