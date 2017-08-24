import {
} from './actions';

const initialState = {
  orders: [],
  packaged: 0,
  shipped: 0
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
