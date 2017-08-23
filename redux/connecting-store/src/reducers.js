const assert = require("assert");

const ADD_ITEM = 'ADD_ITEM';

const initialState = {
  items: []
};

export const addItem = (item) => { return {
  type: ADD_ITEM,
  item
}}

function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [].concat(state, action.item);
    default:
      return state;
  }
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: itemsReducer(state.items, action)
      });
    default:
      return state
  }
}

