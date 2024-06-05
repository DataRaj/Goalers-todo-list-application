import React, { useContext } from 'react';
import { TaskContext } from '../util/task-provider';
import TaskItem from './task-items';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;

  return (
    <div className=' w-full relative flex flex-col rounded-md   '>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          id= {task.id}
          name={task.name}
          completed={task.completed}
          />
          ))}
          </div>
          );
          };
          
          export default TaskList;
