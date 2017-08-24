const assert = require("assert");

const initialState = {
  items: []
};

// No changes are needed above this line.

const ADD_ITEM = 'ADD_ITEM';
const addItem = (item) => { return { type: ADDITEM, item }}

const UPDATE_ITEM = 'ADD_ITEM';
const updateItem = (item, index) => { return { type: UDPATE_ITEM, item, index }}

function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADDITEM:
      return [].concat(state, action.item);
    case UPDATEITEM:
      const newItems = [].concat(state);
      newItems[action.index] = action.item;
      return newItems;
    default:
      return state;
  }
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADDITEM:
    case UPDATEITEM:
      return Object.assign({}, state, {
        items: itemsReducer(state.items, action)
      });
    default:
      return state;
  }
}

// No changes are needed below this line.

let itemsState = itemsReducer([], {});
let newItemState = itemsReducer(itemsState, { action: 'UNKNOWN' });
assert.notEqual(itemsState, undefined, "The itemsReducer isn't properly returning state - the new state is undefined");

itemsState = itemsReducer([], {});
itemsState = itemsReducer(itemsState, addItem('New item'));
assert.deepEqual(itemsState, ['New item'], "The itemsReducer didn't create a new item, given the ADD_ITEM action");

const updateAction = updateItem('Newer item', 0);
itemsState = itemsReducer(itemsState, updateAction);
assert.deepEqual(itemsState, ['Newer item'], `The itemsReducer didn't update an item, given the UPDATE_ITEM action. Got ${updateAction.type} instead`);

let state = appReducer(initialState, {});
state = appReducer(state, addItem('New item'));
state = appReducer(state, updateItem('Newer item', 0));
assert.deepEqual(state.items, ['Newer item'], "The appReducer didn't update an item, given the UPDATE_ITEM action");
assert.notEqual(state, undefined, "The appReducer isn't properly returning state - the new state is undefined");

console.log("Passed! :)");
