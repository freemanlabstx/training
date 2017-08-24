// Import the ERROR action type.
import { DECREMENT, INCREMENT } from './actions';

// Add the empty string "error" to initialState.
const initialState = {
  counter: 0,
}

export default function rootReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case DECREMENT:
      // We're successfully decrementing.
      // How should we update error, considering
      // that we're successfully performing this
      // action?
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    case INCREMENT:
      // We're successfully incrementing.
      // How should we update error, considering
      // that we're successfully performing this
      // action?
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    // Add a case statement to match ERROR in
    // your reducer. It should generate a new
    // version of state, and set error to
    // true.
    default:
      return state
  }
}
