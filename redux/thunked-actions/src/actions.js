const MIN_COUNTER = 0;
const MAX_COUNTER = 5;

export const ERROR = 'ERROR';

// Define a simple error action creator that just returns
// an action with type ERROR, and a message. The error function
// should accept that message as its only argument.
// Note that this is a "simple" action, no thunking functionality
// is needed.

export const INCREMENT = 'INCREMENT';

// Replace increment with a "thunked" action that
// dispatches INCREMENT only if the value is less than
// a specified max value.
//
// To do this, we should write the function signature
// in the following format:
//
//   const increment = () => {
//     return ( dispatch, getState ) => {
//     }
//   }
//
// You can dispatch actions using the `dispatch` function
// argument in line 11, and you can also get the current state
// by calling the function getState().
//
// Compare the current value of counter in state against MAX_COUNTER.
// If we're at the maximum value, dispatch an error action,
// else just dispatch an action with the type INCREMENT.
//
// The error function takes a single argument, a message,
// that you'll display in the UI.
export const increment = () => {
  return {type: INCREMENT};
};

export const DECREMENT = 'DECREMENT';

// Define similar behavior to the new increment function for
// decrement. Instead of comparing against MAX_COUNTER, use MIN_COUNTER,
// and dispatch an error action if attempting to decrement below that.
export const decrement = () => {
  return {type: DECREMENT};
};
