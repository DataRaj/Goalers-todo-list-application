import React from 'react'
import TaskForm from './components/task-form'
import TaskList from './components/task-list'
import { TaskProvider } from './util/task-provider'

const App = () => {
  return (
    <TaskProvider>
      <div className=' h-max flex flex-row justify-evenly items-center text-slate-100 grid-cols-2'>
       <div className='flex flex-col justify-center items-center'>
        <h1 className=' text font-bold text-3xl font-serif'>Todo List</h1>
        <TaskForm />
       </div>

       <div className=' min-w-[600px] flex justify-center flex-col items-center bg-slate-900 rounded-md pb-4 py-6'>
        <h1 className='text font-bold text-3xl font-serif '>Tasks</h1>
        <TaskList />
       </div>
      </div>
    </TaskProvider>
  )
}

export default App
