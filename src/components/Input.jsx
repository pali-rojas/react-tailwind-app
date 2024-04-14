import React from "react";
import { useState } from "react";
import List from "./List"

function Input(){

    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(event){
        setInputTask(event.target.value);
    };

    function addTask (task){
        setTasks([...tasks, {text: task}])
    };

    function handleOnSubmit(event){
        event.preventDefault();
        if (inputTask){
            addTask(inputTask)
            setInputTask("")
            //it's not clearing input
        };
    };      

    return(
        <div className="text-center">
            <form onSubmit={handleOnSubmit}>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="What you want to achieve today?" 
                    />
                <br />
                <button type="submit">Add</button>
            </form>
            <br />
            {tasks.map((task) => (
               <List task={task.text} /> 
            ))}
        </div>
    )
}

export default Input;