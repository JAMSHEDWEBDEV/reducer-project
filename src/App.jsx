import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

const App = () => {

    const [tasks, setTasks] = useState(initialTasks);

    const getNextId = (data) =>{
        const maxId = data.reduce((prev,current)=> prev && prev.id > current.id ? prev.id : current.id );

        return maxId + 1;
    }
    
    // handler start 
    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: getNextId(tasks),
                text: text,
                done: false,
            }
        ]);
    }

    const handleChangeTask = (task) =>{
        const nextTasks = tasks.map(t => {
            if(t.id === task.id){
                return task;
            }else{
                return t;
            }
        })
        setTasks(nextTasks);
    }

    const handleDelete = (taskId) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    return (
        <>
           <h1>Prague itinerary</h1>
           {/* Add Task  */}
           <AddTask onAdd = {handleAddTask}/>

           {/* task list  */}
           <TaskList 
           tasks={tasks} 
           onChangeTask={handleChangeTask}
           onDelete={handleDelete}
           />
        </>
    );
};

export default App;
