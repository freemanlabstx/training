import { DECREMENT, INCREMENT } from './actions';

const initialState = {
  counter: 0,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    case INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    default:
      return state
  }
}
