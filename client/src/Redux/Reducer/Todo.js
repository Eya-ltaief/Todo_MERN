import { GET_TODOS_LOAD,GET_TODOS_SUCCESS,DELETE_TODOS, UPDATE_TODOS, ADD_TODOS} from "../constants/todoTypes"
const initState = {
    todos: [],
    loading: false,
}
const todoReducer=(state=initState, {type, payload})=>{
    switch(type){
        case GET_TODOS_LOAD: return {
            ...state,
            loading: true
        }
        case GET_TODOS_SUCCESS: return {
            ...state,
            contacts: payload,
            loading: false
        }
        case DELETE_TODOS:
        return {
            ...state,
            todos: [...state.todos].filter((todo) => todo._id !== payload),
            loading: false,
        };
        case ADD_TODOS:
        return {
            ...state,
            todos: [payload, ...state.todos],
            loading: false,
        };
        case UPDATE_TODOS:
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo._id === payload._id ? payload : todo
            ),
            loading: false,
        };

        default: return state
    }
}
export default todoReducer;