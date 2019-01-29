// Import the following named constants from './constants':
//   - ADD_WIDGET
//   - GENERATE_ORDER
//   - ORDER_MATERIALS
//   - PACKAGE_ORDER
//   - PRESENT_ERROR
//   - SHIP_ORDER
//   - DOWELS_NEEDED
//   - SCREWS_NEEDED
//   - WHEELS_NEEDED

export function attemptWidgetCreation() {
  return (dispatch, getState) => {
    const {warehouse: {materials}} = getState();
    const {dowel, screw, wheel} = materials;

    if (
      dowel.count >= DOWELS_NEEDED &&
      screw.count >= SCREWS_NEEDED &&
      wheel.count >= WHEELS_NEEDED
    ) {
      dispatch(addWidget());
    } else {
      dispatch(presentError('Not enough materials to create a widget'));
    }
  };
}

// Define the function addWidget, which returns an object:
//   - the key "date" should be set to Date.now()
//   - the key "type" should be the constant ADD_WIDGET

// Define the function generateOrder, which returns an object:
//   - the key "date" should be set to Date.now()
//   - the key "type" should be the constant GENERATE_ORDER

// Define the function orderMaterials, which returns an object:
//   - the key "type" should be the constant ORDER_MATERIALS

export function checkOrderForPackaging() {
  return (dispatch, getState) => {
    const {warehouse: {orders, widgets}} = getState();
    const order = orders[0];
    if (order.widgets <= widgets.length) {
      dispatch(packageOrder(order));
    } else {
      dispatch(presentError('Not enough widgets to fill order!'));
    }
  };
}

// Define the function packageOrder, which takes an argument "order" and returns an object:
//   - the key "type" should be the constant PACKAGE_ORDER
//   - the key "order" should be set to the argument order

// Define the function shipOrder, which returns an object:
//   - the key "type" should be the constant SHIP_ORDER

export function presentError(message) {
  return {
    type: PRESENT_ERROR,
    message,
  };
}

export {
  attemptWidgetCreation,
  generateOrder,
  orderMaterials,
  packageOrder,
  presentError,
  shipOrder,
};
