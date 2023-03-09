import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import { useEffect, useState } from 'react';
import TaskContent from './components/TaskContent';


function App() {

  //pasar tareas a local storage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if(!initialTasks){
    initialTasks = [];
  }

const [tasks,setTasks] = useState(initialTasks)

useEffect(() => {
  if(initialTasks){
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }else{
    localStorage.setItem("tasks",JSON.stringify([]));
  }
},[initialTasks,tasks])

  const createTask= (task)=>{
    setTasks([...tasks,task]);
  };

  const deleteTask= (id) =>{
    const currenTask = tasks.filter((task) => task.idTask !== id)
    console.log(currenTask);
    setTasks(currenTask);
  };
  return (
    <Container>
      <Header></Header>
      <InputTask createTask ={createTask}/>
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
    </Container>
  );
}

export default App;
