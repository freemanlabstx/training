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

const initialState = {
  error: null,
  failed: 0,
  orders: [],
  materials: {
    dowel: {count: 2},
    screw: {count: 8},
    wheel: {count: 3},
  },
  packaged: 0,
  shipped: 0,
  widgets: [],
};

const addWidget = (state, date) => {
  const newMaterials = state.materials;
  newMaterials.dowel.count -= DOWELS_NEEDED;
  newMaterials.screw.count -= SCREWS_NEEDED;
  newMaterials.wheel.count -= WHEELS_NEEDED;

  let newState = {materials: newMaterials};

  if (qaCheck()) {
    const newWidget = {created: date};
    const newWidgetsInventory = [].concat(state.widgets, newWidget);
    newState.error = null;
    newState.widgets = newWidgetsInventory;
  } else {
    newState.failed = state.failed += 1;
    newState.error = 'A widget failed QA!';
  }

  return Object.assign({}, state, newState);
};

const qaCheck = () => {
  const check = Math.floor(Math.random() * 10);
  return check < 9;
};

const generateOrder = (state, date) => {
  const newOrder = {
    created: date,
    widgets: Math.floor(Math.random() * 10) + 1,
  };
  const newOrders = [].concat(state.orders, newOrder);
  return Object.assign({}, state, {
    orders: newOrders,
  });
};

const orderMaterials = state => {
  const {materials} = state;
  const {dowel, screw, wheel} = materials;
  return Object.assign({}, state, {
    error: null,
    materials: {
      dowel: {count: dowel.count + 10},
      screw: {count: screw.count + 10},
      wheel: {count: wheel.count + 10},
    },
  });
};

const packageOrder = (state, order) => {
  const newWidgets = state.widgets;

  for (var i = 0; i < order.widgets; i++) {
    newWidgets.shift();
  }

  let newOrders = [].concat(state.orders);
  newOrders = newOrders.filter(obj => order != obj);

  return Object.assign({}, state, {
    error: null,
    orders: newOrders,
    packaged: state.packaged + 1,
    widgets: newWidgets,
  });
};

const presentError = (state, message) => {
  return Object.assign({}, state, {
    error: message,
  });
};

const shipOrder = state => {
  return Object.assign({}, state, {
    error: null,
    packaged: state.packaged - 1,
    shipped: state.shipped + 1,
  });
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return addWidget(state, action.date);
    case GENERATE_ORDER:
      return generateOrder(state, action.date);
    case ORDER_MATERIALS:
      return orderMaterials(state);
    case PACKAGE_ORDER:
      return packageOrder(state, action.order);
    case PRESENT_ERROR:
      return presentError(state, action.message);
    case SHIP_ORDER:
      return shipOrder(state);
    default:
      return state;
  }
}
