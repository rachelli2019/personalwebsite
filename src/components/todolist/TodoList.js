import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../../redux/selectors";
// import { VISIBILITY_FILTER } from "./constants"

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);


const mapStateToProps = state => {
  console.log(state)
  // what is state here?
  const { visibilityFilter } = state
  console.log( visibilityFilter )
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)

// export default connect(state => ({ todos: getTodos(state) }))(TodoList);

// don't need this bc we have the selector

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos = allIds && allIds.length 
//     ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//     : null;
//   return { todos };
// };

// export default connect(mapStateToProps)(TodoList);
