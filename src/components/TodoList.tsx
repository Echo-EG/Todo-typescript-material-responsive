import React, {useEffect} from 'react';
import {RootState} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {ITask} from "../interface";
import {getTodoAsync} from "../redux/slice";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const todos:ITask[] = useSelector((state: RootState) =>{
        return state.todos
    })

    const dispatch =useDispatch();

    useEffect(() =>{
        dispatch(getTodoAsync())
    }, [])

    return (
        <div>
            {todos.map((newTodo: ITask, key:number) =>{
                return <TodoItem key={newTodo.id} title={newTodo.title} id={newTodo.id} checked={newTodo.checked}/>
            })}
        </div>
    );
};

export default TodoList;