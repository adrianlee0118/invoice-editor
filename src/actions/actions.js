export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const CALCULATE_TAX_TOTAL = 'CALCULATE_TAX_TOTAL';


/**
 * Functions enable user inputs to be transferred to reducer so that state can be modified and app re-rendered.
 */
const addNewItem = (itemData) => {
  return {
    type: ADD_NEW_ITEM,
    itemData,
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

const removeItem = (position) => {
  return {
    type: REMOVE_ITEM,
    position,
  };
};

const deleteItem = (position) => {
  return (dispatch) => {
    dispatch(removeItem(position));
    dispatch(calculateTotal());
  };
};

const changeItem = (position, newValue, type) => {
  return {
    type: CHANGE_ITEM,
    position,
    newValue,
    type,
  }
};

const editItem = (position, newValue, type) => {
  return (dispatch) => {
    dispatch(changeItem(position,newValue,type));
    dispatch(calculateTotal());
  }
}

const calculateTotal = () => {
  return {
    type: CALCULATE_TAX_TOTAL,
  };
};


export {
  submitItem,
  editItem,
  changeItem,
  calculateTotal,
  deleteItem,
  addNewItem,
  removeItem,
};
