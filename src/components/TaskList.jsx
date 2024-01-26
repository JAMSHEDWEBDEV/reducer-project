import Task from "./Task";

const TaskList = ({tasks,onChangeTask,onDelete}) => {
  return (
    <ul>
      {
        tasks.map(task => 
        <Task 
           key={task.id}
           task={task}
           onChangeTask={onChangeTask}
           onDelete={onDelete}
        /> )
      }
    </ul>
  );
};

export default TaskList;
