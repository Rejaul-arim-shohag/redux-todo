import todoReducer from  "./todos/todosReducer";
import filterReducer from "./filters/filterReducer";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
})
export default rootReducer;