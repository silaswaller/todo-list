import React, { useState } from 'react';

const Tasks = () => {
    const [task, setTask] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        if (task.length === 0) {
            return;
        }
        const completedTask = {
            text: task,
            complete: false,
        }
        setTaskArr([...taskArr, completedTask]);
        console.log("new task added");
        setTask("");
    }

    const completeTask = (completeIndex) => {
        const updatedTasks = taskArr.map((task, i) => {
            if (completeIndex === i) {
            task.complete = !task.complete;
            }
            return task;
        })
        setTaskArr(updatedTasks);
    }

    const deleteTask = (deleteIndex) => {
        console.log("task deleted");
        const filteredTasks = taskArr.filter((taskArr, i) => {
            return i !== deleteIndex;
        })
        setTaskArr(filteredTasks);
    }
    
    return(
    <div>
        <h1 id="title">TO-DO LIST:</h1>
        <form onSubmit={addTask}>
            <input 
            type="text" 
            id="newTask" 
            value={task}
            onChange={e => setTask(e.target.value)}></input>
            <button type="submit" id="addButton">+</button>
        </form>
        {taskArr.map((task, i) =>  {
            const completeClass = ["listItem"];
            if (task.complete) {
                completeClass.push("complete");
            }
        return ( 
        <div 
        key={i}>
            <form className="listForm">
            <label>
                <input type="checkbox" 
                checked={task.complete}
                onChange={(e) => completeTask(i)}/>
            </label>
            <h3 className={completeClass.join(" ")}>{task.text} </h3>
            <button type="button" className="delete" onClick={(e) => deleteTask(i)}>DELETE</button>
        </form>
        </div>
        );
        })}
    </div>
    );
}

export default Tasks;