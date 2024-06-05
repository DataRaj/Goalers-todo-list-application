import React, { useState, useContext } from 'react';
import { TaskContext } from '../util/task-provider';

interface TaskItemProps {
  id: number;
  name: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, name, completed }) => {
  const { updateTask, deleteTask, toggleTaskCompletion } = useContext(TaskContext)!;
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleUpdate = () => {
    if (newName.trim()) {
      updateTask(id, newName);
      setIsEditing(false);
    }
  };

  return (
    <div className=' w-full flex flex-1 justify-between py-2 px-6 mt-4  text-slate-200'>
      <input
        className='ml-4'
        type="checkbox"
        checked={completed}
        onChange={() => toggleTaskCompletion(id)}
      />
      {isEditing ? (
        <>
          <input 
            className='ml-4 font-semibold bg-slate-400 border-none text-slate-900 rounded-md px-2 w-40'
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button 
          className='ml-4  hover:text-slate-900 hover:bg-slate-400 hover:shadow-lg rouded-lg px-2 py-1'
          onClick={handleUpdate}>Save</button>
          <button 
          className='ml-4 hover:text-slate-900 hover:bg-slate-400 hover:shadow-lg rouded-lg px-2 py-1'
          onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
          <button
            className='ml-4 hover:text-slate-900 hover:bg-slate-400 hover:shadow-lg rouded-lg px-2 py-1'
            onClick={() => setIsEditing(true)}
            >Edit</button>
        </>
      )}
      <button 
      className='ml-4 hover:text-slate-900 hover:bg-slate-400 hover:shadow-lg rouded-lg px-2 py-1'
      onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
