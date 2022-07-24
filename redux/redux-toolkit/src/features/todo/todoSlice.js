import { createSlice } from '@reduxjs/toolkit';

// Begin by a new object called initialState.
// This is an object with a single key called "todos",
// which is an array.
//
// Inside the todos array, make an object representing
// an initial todo.
//
// The object should have three key/value pairs:
//   - id, which is an integer (default to 1)
//   - text, which is a string (give this a value like "My first todo")
//   - completed, which is a boolean (default to false)

// The function below is called a selector and allows us to select a value from
// the state. selectTodos should look into our state object and return the todos
// array. To do this, replace null with state.todo.todos, where todo is the name 
// of our reducer, and todos is the array inside of our todo reducer's state.
export const selectTodos = (state) => null

// todoSlice uses redux-toolkit's slice API to create a collection of
// state, reducers, and action creators, without needing to define extra code.
export const todoSlice = createSlice({
  // Set the "name" key to the string "todo". 

  // Set the key "initialState" to the value "initialState".

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Create a function called "add" which takes two arguments: "state" and "action".
    //
    // Inside this function, we need to modify state.todos by "pushing" a new object
    // onto the array.
    //
    // This object should contain three key/value pairs:
    //   - "id" is an integer, and should be one more than the previous id. To do this,
    //      set "id" to state.todos.length + 1, which will be 2 when there is 1 todo,
    //      3 when there is 2 todos, etc.
    //   - "text", which is the passed-in input from your form. Set this to "action.payload".
    //   - "completed", which is false
    //
    // With your new todo, add it to the end of the "state.todos" array using 
    // the "push" function.

    // "complete" is a function that allows you to find a todo based on "id" in state, 
    // and mark it as completed.
    complete: (state, action) => {
      // The below code looks at `action.payload` - a todo id - and finds the matching
      // todo in state using `findIndex`.
      const todoIndex = state.todos.findIndex(todo => todo.id == action.payload)
      // "todo" represents this todo in our state.
      const todo = state.todos[todoIndex]

      // Now, we should update todo.completed to the correct value. If the todo is
      // incomplete, it should be marked as completed, and vice-versa. Update 
      // todo.completed below to the correct value.

    }
  },
});

export const { add, complete } = todoSlice.actions;

export default todoSlice.reducer;
