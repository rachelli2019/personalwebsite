import React from "react";
import AddTodo from "../components/todolist/AddTodo";
import TodoList from "../components/todolist/TodoList";
import VisibilityFilters from "../components/todolist/VisibilityFilters";
import "../styles/todoStyles.css";
import { Provider } from 'react-redux'
import store from '../redux/store'

console.log(store)

export default function TodoApp() {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </Provider>
  );
}
