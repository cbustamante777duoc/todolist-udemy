import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";

function App() {

  const crearTask = (task) =>{
    console.log(task);
  }

  return (
    <Container>
      <Header />
      <InputTask crearTask={crearTask}/>
    </Container>
  );
}

export default App;
