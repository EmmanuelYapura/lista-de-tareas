import './App.css';
import { TaskList } from './components/TaskList';

function App() {


  return (
    <div className="App">
      <h1 className='texto-principal'>Bienvenido a tu lista de tareas</h1>
      <TaskList />
    </div>
  );
}

export default App;