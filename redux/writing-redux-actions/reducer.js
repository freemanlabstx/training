export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

const initialState = {
  items: []
};


// No changes are needed above this line.

export function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [].concat(state, action.item)
    case CLEAR_ITEMS:
      return []
    case REMOVE_ITEM:
      let items = [].concat(state)
      items.splice(action.index, 1);
      return items;
    case UPDATE_ITEM:
      items = [].concat(state)
      items[action.index] = action.item;
      return items;
    default:
      return state;
  }
}

export function appReducer(state = initialState, action = {}) {
  console.log(state)
  switch (action.type) {
    case ADD_ITEM:
    case CLEAR_ITEMS:
    case REMOVE_ITEM:
    case UPDATE_ITEM:
      return Object.assign({}, state, {
        items: itemsReducer(state.items, action)
      })
    default:
      return state;
  }
}

