const assert = require("assert");

const ADD_ITEM = 'ADD_ITEM';
const addItem = { type: ADD_ITEM, item: 'New item' }

const initialState = {
  items: []
};


// No changes are needed above this line.

function itemsReducer(state = [], action) {
  switch (action.type) {
    // We're matching on `action.type` - how would
    // we handle the case where the action is
    // `ADD_ITEM`? If you're confused, you might
    // want to look up the switch/case syntax
    // for JavaScript.
    //
    // Inside this match section, we should create
    // a new array of items, and concat the previous
    // state array, and the new item from action onto
    // it. Return the new array.

    // Matching on 'default', we should just return state.
  }
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    // We're matching on `action.type` - how would
    // we handle the case where the action is
    // `ADD_ITEM`?
    //
    // Inside this match section, we should create
    // a new object, apply state onto it, and then
    // replace items with the result of the itemsReducer
    // being called. itemsReducer takes the relevant state
    // and an action. Keep in mind that the state for
    // itemsReducer is _just_ dealing with the `items` section
    // of the application state! Return this new object.

    // Matching on 'default', we should just return state.
  }
}

// No changes are needed below this line.

let itemsState = itemsReducer([], {});
let newItemState = itemsReducer(itemsState, { action: 'UNKNOWN' });
assert.notEqual(itemsState, undefined, "The itemsReducer isn't properly returning state - the new state is undefined");

itemsState = itemsReducer([], {});
itemsState = itemsReducer(itemsState, addItem);
assert.deepEqual(itemsState, ['New item'], "The itemsReducer didn't create a new item, given the ADD_ITEM action");

let state = appReducer(initialState, {});
state = appReducer(state, addItem);
assert.deepEqual(state.items, ['New item'], "The appReducer didn't create a new item, given the ADD_ITEM action");
assert.notEqual(state, undefined, "The appReducer isn't properly returning state - the new state is undefined");

console.log("Passed! :)");
