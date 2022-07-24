import React, { useState } from 'react';

// Import the named useSelector and useDispatch imports from 
// the 'react-redux' package.
import { useSelector, useDispatch } from 'react-redux';

// Import the named add, complete, and selectTodos imports 
// from './todoSlice'.
import {
  add,
  complete,
  selectTodos,
} from './todoSlice';

import './Todo.module.css'

export function Todo() {
  // Set up a new useState hook with newTodo/setNewTodo, and default
  // the initial value to an empty string.

  const updateText = ({ target: { value } }) => setNewTodo(value)

  const dispatch = useDispatch();

  const createTodo = event => {
    event.preventDefault()
    
    // This function is called when the below form submits.
    // Call the "dispatch" function, and pass the executed
    // "add" function, with the "newTodo" parameter.
    //
    //   e.g. `dispatch(myFunc(parameter))`

    // Once the todo is submitted, the below function clears
    // the text input.
    setNewTodo("")
  }

  const completeTodo = event => {
    const id = event.target.dataset.id

    // This function is called when the todo checkbox is checked.
    // Call the "dispatch" function, and pass the executed
    // "complete" function, with the "id" parameter.
    //
    //   e.g. `dispatch(myFunc(idParameter))`
  }

  // Set a variable called "todos" by calling the "useSelector"
  // function, passing in the "selectTodos" function as a
  // parameter.


  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          onChange={updateText}
          placeholder="New todo"
          required={true}
          type="text"
          value={newTodo}
        />
        <input type="submit" />
      </form>

      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            <input 
              checked={todo.completed} 
              data-id={todo.id}
              onChange={completeTodo} 
              type="checkbox" 
            />
            <span>{todo.text}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
