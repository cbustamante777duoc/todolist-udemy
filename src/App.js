import { useEffect, useState } from 'react';
import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";

function App() {

  //inicio valores del storage
  let inicialTask = JSON.parse(localStorage.getItem('tasks'));

  //si no tiene nada lo inicia como un arreglo vacio
  if (!inicialTask) {
    inicialTask = [];
  }

  const [tasks, setTasks] = useState(inicialTask);

  useEffect(() => {
    if (inicialTask) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, [inicialTask, tasks])




  const crearTask = (task) => {
    setTasks([...tasks, task]);
  }

  console.log("localStorage " + JSON.stringify(tasks));

  return (
    <Container>
      <Header />
      <InputTask crearTask={crearTask} />
    </Container>
  );
}

export default App;
