export const GENERATE_ORDER = 'GENERATE_ORDER'
export const PACKAGE_ORDER = 'PACKAGE_ORDER'
export const SHIP_ORDER = 'SHIP_ORDER'

export const generateOrder = () => {
  return {
    type: GENERATE_ORDER,
    order: {
      id: Math.floor(Math.random() * 1e10),
      widgets: Math.floor(Math.random() * 10) + 1
    }
  }
}
