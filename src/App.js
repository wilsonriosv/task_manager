import logo from './logo.svg';
import './App.css';
import { TaskListComponent } from './components/container/task_list';
import { Greetingstyled } from './components/pure/greetingStyled.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Task Manager</h1>
        <TaskListComponent></TaskListComponent>
        <Greetingstyled name='Wilson'></Greetingstyled>
      </header>
    </div>
  );
}

export default App;
