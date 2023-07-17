import React, { useState } from 'react';
import "../css/ToDoList.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [valueTask, setValueTask] = useState("");
    const [counter, setCounter] = useState(1);

    const handleValueTaskChange = (event) => {
        setValueTask(event.target.value);
    };

    const handleAddTask = () => {
        if (valueTask.trim() !== "") {

            setTasks([...tasks, counter + ". " + valueTask]);
            setValueTask("");
            setCounter(counter + 1);
        }
    };
    const handleRemoveTask = (index) => {
        const newTasksArray = [...tasks];
        newTasksArray.splice(index, 1);
        setTasks(newTasksArray);
        setCounter(counter - 1);
    };

    return (
        <div>
            <div className='input-group mb-3 title-div'>
            <h1 id="title">To Do List</h1>
            
            <div className="input-group mb-3 task-div" >
                <input type="text" className="form-control" value={valueTask} placeholder="Enter a task" onChange={handleValueTaskChange} aria-label="Recipient's username" ></input>
                    <div className="input-group-append">
                        <button onClick={handleAddTask} className="btn btn-success" type="button">Add Task</button>
                    </div>
            </div></div>
            {/* <div className='task-div'>
                <input type='text' value={valueTask} placeholder='Add a task' onChange={handleValueTaskChange}></input>
                <button onClick={handleAddTask} className='btn btn-success'>Add task</button>
            </div> */}

            {tasks.length !== 0 ?
                <ul className='task-list'>
                    {tasks.map((task, index) => (
                        <div className='li-div'>
                        <li key={index}>
                            <label>{task}</label>
                            <button className="remove-button btn btn-danger" onClick={() => handleRemoveTask(index)}>Remove</button>
                        </li>
                        </div>
                    ))}
                </ul> : <ul className=' no-items'>
                    <h4>No items to show</h4>
                </ul>}
        </div>
    );
}
