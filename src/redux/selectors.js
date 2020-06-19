import { VISIBILITY_FILTERS } from "../components/todolist/constants"

export const getTodoList = store =>
    store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
    store && store.todos && store.todos.byIds 
    ? { ...store.todos.byIds[id], id } 
    : {};

export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));


// selector for getting todos based on the active filter
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store)
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.completed)
      case VISIBILITY_FILTERS.INCOMPLETE:
        return allTodos.filter(todo => !todo.completed)
      case VISIBILITY_FILTERS.ALL:
      default:
        return allTodos
    }
  }




    // export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    //     const allTodos = getTodos(store);
    //     switch (visibilityFilter) {
    //       case VISIBILITY_FILTERS.COMPLETED:
    //         let data = allTodos.filter(todo => {
    //           console.log(todo);
    //           return todo.completed;
    //         });
    //         console.log(data);
    //         return data;
    //       case VISIBILITY_FILTERS.INCOMPLETE:
    //         return allTodos.filter(todo => !todo.completed);
    //       case VISIBILITY_FILTERS.ALL:
    //       default:
    //         return allTodos;
    //     }
    //   };