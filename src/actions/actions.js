export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const CALCULATE_TAX_TOTAL = 'CALCULATE_TAX_TOTAL';
export const REMOVE_ITEM = 'REMOVE_ITEM';


const addNewItem = (itemData) => {
  return {
    type: ADD_NEW_ITEM,
    itemData,
  };
};

const removeItem = (position) => {
  return {
    type: REMOVE_ITEM,
    position,
  };
};

const calculateTotal = () => {
  return {
    type: CALCULATE_TAX_TOTAL,
  };
};

const submitItem = ({ item, qty, price }) => {
  const itemData = {
    item,
    qty,
    price,
    total: price * qty,
  };
  return (dispatch) => {
    dispatch(addNewItem(itemData));
    dispatch(calculateTotal());
  };
};

// eslint-disable-next-line
const deleteItem = (position) => {
  return (dispatch) => {
    dispatch(removeItem(position));
    dispatch(calculateTotal());
  };
};


export {
  submitItem,
  calculateTotal,
  deleteItem,
  addNewItem,
  removeItem,
};
