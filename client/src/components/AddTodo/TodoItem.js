import React, {useState} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import "./Add.css"

const TodoItem = (props) => {
    const[text, setText]= useState("");
    const[priority, setPriority]= useState("");
    const[completed, setCompleted]= useState(false);
    const[date, setDate]= useState(new Date());
   
    const onChangeText=(e)=>{
        setText(e.target.value)
    }
    const onChangePriority=(e)=>{
        setPriority(e.target.value)
    }
    const onChangeDate=(date)=>{
        setDate(date)
    }
    const onSubmit= async(e)=>{
        // e.preventDefault();

        const newTodo={
            text: text,
            priority: priority,
            completed: completed,
            date: (date)
        }
        await axios
            .post("http://localhost:5000/todos/", newTodo)
            .then((res)=>console.log(res.data))

        setText("");
        setPriority("");
        setCompleted(false);
        setDate(new Date());
        props.history.push("/");
    }
    return (
        <div>
            <h3>Create New Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="write your todo for today "
                    className="inputField"
                    value={text}
                    onChange={onChangeText}
                />      
                    <button type="submit"
                        value="add Todo"
                        className="btn btn-primary"><i className="fas fa-plus"></i></button>
                    
                </div>
                <div className="form-radio">
                <h5>Set your todo's priority</h5>
                <ul>
                    <li>  
                    <input
                        className="radio-input"
                        type="radio"
                        value="Medium"
                        name="priorityOptions"
                        id="priorityMedium"
                        checked={priority === "Medium"}
                        onChange={onChangePriority}
                    />
                    <label className="form-check-label" htmlFor="priorityMedium">Medium</label>
                    <div className="check"></div>
                    </li>
                    <li>
                    <input
                        className="radio-input"
                        type="radio"
                        value="Low"
                        name="priorityOptions"
                        id="priorityLow"
                        checked={priority === "Low"}
                        onChange={onChangePriority}
                    />
                    <label className="form-check-label" htmlFor="priorityLow">Low</label>
                    <div className="check"><div className="inside"></div></div>
                    </li>
                    <li>
                    <input
                        className="radio-input"
                        type="radio"
                        value="High"
                        name="priorityOptions"
                        id="priorityHigh"
                        checked={priority === "High"}
                        onChange={onChangePriority}
                    />
                    <label className="form-check-label" htmlFor="priorityHigh">High</label>
                    <div className="check"><div className="inside"></div></div>
                    </li>
                </ul>
                </div>
                <div className="form-date">
                <label>Finishes at: </label>
                <div>
                    <DatePicker
                    selected={date}
                    onChange={onChangeDate}
                    dateFormat="dd/MM/yyyy"
                    className="date-picker"
                    
                    />
                </div>
                </div>           
            </form>
        </div>
    )
}

export default TodoItem

