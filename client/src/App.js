import './App.css';
import { Route, Switch } from "react-router-dom";
import TodosList from "./components/TodoList/TodoList"
import EditTodo from "./components/EditTodo/EditTodo"

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={TodosList} />
          <Route path="/:id" component={EditTodo} />
      </Switch>
      
    </div>
  );
}

export default App;
