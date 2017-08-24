import reducer from './reducer';

import { INCREMENT, DECREMENT, ERROR } from './actions';

const initialState = {
  counter: 3,
  error: ''
}

it('dispatches increment', () => {
  const newState = reducer(initialState, { type: INCREMENT });
  expect(newState.counter).toBe(4);
});

it('dispatches decrement', () => {
  const newState = reducer(initialState, { type: DECREMENT });
  expect(newState.counter).toBe(2);
});

it('dispatches error string', () => {
  const newState = reducer(initialState, { type: ERROR, message: 'test' });
  expect(newState.error).toBe('test');
});
