
import './App.css';
import image from './to-do-list.jpg'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className="container">
    <img src={image} width="400px" alt="to do list"/>
    </div>
    <div className="container">
    <h1>Список дел на сегодня:</h1>
    </div>
    <ToDoList/>
    </div>
  );
}

export default App;
