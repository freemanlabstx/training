export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

const initialState = {
  items: [],
};

// No changes are needed above this line.

// Ensure that every "case" in this reducer returns
// an array - the expected state type for the itemsReducer,
// as seen in the line below.
export function itemsReducer(state = [], action) {
  // This variable has been set for you, in case
  // you need to use it.
  let array;

  switch (action.type) {
    // A new item should be added to the end of the
    // items array. Note that doing so in a "pure" way
    // would use the "concat" function.
    //
    // The new item is accessible from action.item.
    case ADD_ITEM:
      return state;

    // If all the items in the array should be removed,
    // what can we return here?
    case CLEAR_ITEMS:
      return state;

    // Removing a single item from the array can be done
    // with .splice. Note that we don't want to modify
    // state directly. Instead, we should use concat
    // to create a new array, and then splice one item
    // out of that array using action.index. Return
    // that array below.
    case REMOVE_ITEM:
      return state;

    // Given a new item (action.item) and the index
    // (action.index), we should update an item
    // by making a new array (using .concat), and
    // updating an item at the index array[index].
    // Return the new array.
    case UPDATE_ITEM:
      return state;

    // The default case should let state pass through
    // without change, in case we are given an action
    // we don't expect. What should we return below?
    default:
      return null;
  }
}

export function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
    case CLEAR_ITEMS:
    case REMOVE_ITEM:
    case UPDATE_ITEM:
      return Object.assign({}, state, {
        items: itemsReducer(state.items, action),
      });
    default:
      return state;
  }
}
