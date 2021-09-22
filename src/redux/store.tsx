import {configureStore} from "@reduxjs/toolkit";
import {ITask} from "../interface";
import todoReducer from './slice';

export interface RootState{
    todos: ITask[]
}

export default configureStore({
    reducer:{
        todos: todoReducer
    }
})