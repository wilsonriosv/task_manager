import logo from './logo.svg';
import './App.css';
import { TaskListComponent } from './components/container/task_list';
import { Greetingstyled } from './components/pure/greetingStyled.jsx'
function App() {
  return (
    <div className="App">
        <h1>Task Manager</h1>
        <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
