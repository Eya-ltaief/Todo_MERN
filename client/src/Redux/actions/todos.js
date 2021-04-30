import axios from "axios";
import { GET_TODOS_LOAD,GET_TODOS_SUCCESS,GET_TODO, DELETE_TODOS, UPDATE_TODOS, ADD_TODOS} from "../constants/todoTypes"



//loading todos
export const setItemLoading = () => {
    return {
      type: GET_TODOS_LOAD,
    };
  };
// get Todos
export const getTodos =() =>async(dispatch)=>{
    dispatch(setItemLoading())
    try{
        await axios
            .get("/todos")
            .then((res)=>dispatch({
            GET_TODOS_SUCCESS,
            payload : res.data
            })
        )}catch(error){
            console.log(error)
        }
}
//get one Todo
// export const getTodo = (todoId) => async (dispatch) => {
//     try {
//         const res = await axios.get(`/todos/${todoId}`)
//         dispatch({ type: GET_TODO, payload: res.data})
//     } catch (error) {
//         console.log(error)
//     }
// }

//delete Todos
export const deleteTodo=(id)=>async(dispatch)=>{
    dispatch(setItemLoading())
    try{
        await axios
            .delete(`/todos/${id}`)
            .then((res)=>dispatch({type: DELETE_TODOS,
                payload: id,
                })
        )}catch (error) {
        console.log(error)
    }
}

//add new todo
export const addTodo=(newTodo)=>async(dispatch)=>{
    dispatch(setItemLoading())
    try{
        await axios
            .post('/todos/add', newTodo)
            .then((response) =>
            dispatch({
                type: ADD_TODOS,
                payload: response.data,
            })
        )}catch (error) {
        console.log(error)
    }
}

//update Todo
export const updateTodo=(todoid,updatedTodo)=>async(dispatch)=>{
    dispatch(setItemLoading())
    try{
        await axios
            .post(`/todos/update/${todoid}`, updatedTodo)
            .then((response) => {
                dispatch({
                  type: UPDATE_TODOS,
                  payload: response.data,
                })
            }
            )}catch(error) {
        console.log(error)
    }
}
