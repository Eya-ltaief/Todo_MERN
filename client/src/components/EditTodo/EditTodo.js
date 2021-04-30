import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"
import "./Edit.css"
const EditTodo = (props) => {
    const[text, setText]= useState("");
    const[priority, setPriority]= useState("");
    const[completed, setCompleted]= useState(false);

    useEffect(() => {
        axios
          .get("http://localhost:5000/todos/" + props.match.params.id)
          .then((res) => {
            setText(res.data.text);
          })
          .catch((err) => console.log(err));
      }, [props.match.params.id]);
    const onChangeText=(e)=>{
        setText(e.target.value)
    }
    const onChangePriority=(e)=>{
        setPriority(e.target.value)
    }
    const onChangeCompleted=(e)=>{
        console.log("asds", !completed);
        setCompleted(!completed);
    }
    
    const onSubmit= async(e)=>{
        e.preventDefault();

        const updatedTodo={
            text: text,
            priority: priority,
            completed: completed,
           
        }
        await axios
      .post("http://localhost:5000/todos/" + props.match.params.id, updatedTodo)
      .then((res) => console.log(res.data));
      
        props.history.push("/");
    }
    return (
        <div>
            <h3>Update Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    className="inputField"
                    value={text}
                    onChange={onChangeText}
                />
                </div>
                <div className="form-radio">
                <h5>Update your todo's priority</h5>
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
                <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="completedCheckbox"
                    name="completedCheckbox"
                    onChange={onChangeCompleted}
                    checked={completed}
                    value={completed}
                />
                <label className="form-check-label" htmlFor="completedCheckbox">
                    Completed
                </label>
                </div>
                <br />
                <div className="form-update">
                    <button
                        type="submit"
                        value="Update Todo"
                        className="btn btn-primary"
                    ><div></div></button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo
