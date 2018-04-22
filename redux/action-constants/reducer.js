const assert = require('assert');

const initialState = {
  items: [],
};

// No changes are needed above this line.

const MY_CONSTANT = 'MY_CONSTANT';

// Define two action constants: ADD_ITEM
// and UPDATE_ITEM.

// Replace the string 'replace me' with your
// new action constant for this method.
const addItem = item => {
  return {type: 'replace me', item};
};

// Replace the string 'replace me' with your
// new action constant for this method.
const updateItem = (item, index) => {
  return {type: 'replace me', item, index};
};

function itemsReducer(state = [], action) {
  switch (action.type) {
    // Replace the 'replace me' text with
    // the correct action constant for
    // this action.
    case 'replace me':
      // Adding an item
      return [].concat(state, action.item);
    // Replace the 'replace me' text with
    // the correct action constant for
    // this action.
    case 'replace me':
      // Updating an item
      const newItems = [].concat(state);
      newItems[action.index] = action.item;
      return newItems;
    default:
      return state;
  }
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    // Replace both 'replace me' texts with
    // the two action constants you've defined
    // in this exercise. Note that putting
    // two case statements in a row means
    // that the first statement will "pass through"
    // and use the same functionality as the second.
    case 'replace me':
    case 'replace me':
      return Object.assign({}, state, {
        items: itemsReducer(state.items, action),
      });
    default:
      return state;
  }
}

// No changes are needed below this line.

let itemsState = itemsReducer([], {});
let newItemState = itemsReducer(itemsState, {action: 'UNKNOWN'});
assert.notEqual(
  itemsState,
  undefined,
  "The itemsReducer isn't properly returning state - the new state is undefined",
);

itemsState = itemsReducer([], {});
itemsState = itemsReducer(itemsState, addItem('New item'));
assert.deepEqual(
  itemsState,
  ['New item'],
  "The itemsReducer didn't create a new item, given the ADD_ITEM action",
);

const updateAction = updateItem('Newer item', 0);
itemsState = itemsReducer(itemsState, updateAction);
assert.deepEqual(
  itemsState,
  ['Newer item'],
  `The itemsReducer didn't update an item, given the UPDATE_ITEM action. Got ${
    updateAction.type
  } instead`,
);

let state = appReducer(initialState, {});
state = appReducer(state, addItem('New item'));
state = appReducer(state, updateItem('Newer item', 0));
assert.deepEqual(
  state.items,
  ['Newer item'],
  "The appReducer didn't update an item, given the UPDATE_ITEM action",
);
assert.notEqual(
  state,
  undefined,
  "The appReducer isn't properly returning state - the new state is undefined",
);

console.log('Passed! :)');
