import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import "./todo.css"
import TodoItem from '../AddTodo/TodoItem';

const Todo = (props) => (
    <tr >
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.text}
    </td>
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.priority}
    </td>
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.date}
    </td>
    
    <td>
      <Link to={"/" + props.todo._id}><i className="fas fa-edit"></i></Link>
    </td>
    <td>
      <small
        style={{ fontSize: "17px", color: "red", cursor: "pointer" }}
        onClick={(e, id) => props.deleteHandler(e, props.todo._id)}
      >
        <i className="fas fa-trash-alt"></i>
      </small>
    </td>
  </tr>
  );
  const TodosList = (props) => {
    const [todos, settodos] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/todos")
        .then((res) => {
          settodos(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    const deleteHandler = async (e, id) => {
        e.preventDefault();
        console.log("id", id);
        await axios
          .delete(`http://localhost:5000/todos/${id}`)
          .then((res) => console.log("Todo Item deleted"));
        window.location.reload();
      };
      const todoList = () =>
        todos.map((todo, index) => (
          <Todo todo={todo} key={index} deleteHandler={deleteHandler} />
        ));
    return (
        <div>
            <TodoItem/>
            <div className="table-container">
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                <tr>
                    <th>Todo</th>
                    <th>Priority</th>
                    <th>Finishes at</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>{todoList()}</tbody>
            </table>
            </div>
        </div>
    )
}

export default TodosList
