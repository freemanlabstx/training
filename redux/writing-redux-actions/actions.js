const assert = require('assert');

import {
  appReducer,
  itemsReducer,
  ADD_ITEM,
  CLEAR_ITEMS,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from './reducer';

// No changes are needed above this line.

// Define the addItem function:
//   - takes item as the function argument
//   - returns an object with type ADD_ITEM
//     and item, set to item

// Define the updateItem function:
//   - takes item and index as the function
//     arguments
//   - returns an object with type UPDATE_ITEM,
//     item set to item, and index set to index
//
// You'll also need to go into the reducers and
// make sure that UPDATE_ITEM is being correctly
// exported.

// Define the removeItem function:
//   - takes index as the function argument
//   - returns an object with type REMOVE_ITEM
//     and index, set to index

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

itemsState = itemsReducer(itemsState, updateItem('Newer item', 0));
assert.deepEqual(
  itemsState,
  ['Newer item'],
  "The itemsReducer didn't update an item, given the UPDATE_ITEM action",
);

itemsState = itemsReducer(itemsState, removeItem(0));
assert.deepEqual(
  itemsState,
  [],
  "The itemsReducer didn't remove an item, given the REMOVE_ITEM action",
);

let state = appReducer();
state = appReducer(state, addItem('New item'));
assert.deepEqual(
  state.items,
  ['New item'],
  "The appReducer didn't create a new item, given the ADD_ITEM action",
);
state = appReducer(state, updateItem('Newer item', 0));
assert.deepEqual(
  state.items,
  ['Newer item'],
  "The appReducer didn't update an item, given the UPDATE_ITEM action",
);
state = appReducer(state, removeItem(0));
assert.deepEqual(
  state.items,
  [],
  "The appReducer didn't remove an item, given the REMOVE_ITEM action",
);

assert.notEqual(
  state,
  undefined,
  "The appReducer isn't properly returning state - the new state is undefined",
);

console.log('Passed! :)');
