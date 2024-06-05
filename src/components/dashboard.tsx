import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
const database : {
    name:string,
    completed: boolean }  []  = []


console.log(database)
const Dashboard = () => {
    const [name, setName] = useState('');
    const [tasks, setTasks] = useState(database)
    // const [completed, setCompleted] = useState(false)


    function checkTaskExistence(name: string): boolean {
        return tasks.some(task => task.name === name);
    }     
    function HandleDuplicateTask() {        
        return (
            <>
                {checkTaskExistence(name) ? (
                    <div>
                        <h1>"Task already exists"</h1> 
                        <button type="submit" disabled={checkTaskExistence(name)}>
                            Submit
                        </button>
                    </div>
                ) : (
                    database.push({ name: name, completed: false })
                )}
            </>
        );
    }

    // Inside the Dashboard component
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        HandleDuplicateTask();
    }
    


    useEffect(()=>{
        setTasks(database)
    },[database])


    function completeTask(name: string){
        const task = database.find((item)=>item.name === name)
        if(task){
            task.completed = true
        }
    }

    function handleCheckboxChange(name: string) {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.name === name) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            });
        });
    }
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleDeleteClick(name: string) {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.name !== name);
        });
    }

    return (
        <div className=''>
            <h1>Task Manager</h1>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter the task Name:</label>
                <input type="text" onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {tasks.map(item => (
                    <li key={item.name} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.name}
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleCheckboxChange(item.name)}
                        />
                        <button onClick={() => handleDeleteClick(item.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
    

export default Dashboard


