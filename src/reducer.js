import { combineReducers } from 'redux';
import { ADD_NEW_ITEM, CALCULATE_TAX_TOTAL, REMOVE_ITEM } from './actions';

const initalState = {
  listItems: [],
  subTotal: null,
  tax: null,
  total: null,
};


const invoiceReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return {
        ...state,
        listItems: [...state.listItems, action.itemData],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter((item, index) => index !== action.position),
      };

    // eslint-disable-next-line
    case CALCULATE_TAX_TOTAL:
      const subTotal = state.listItems.reduce((acc, item) => acc + item.total, 0);
      const tax = Number(((subTotal / 100) * 5).toFixed(2));
      const total = Number((subTotal + tax).toFixed(2));
      return {
        ...state,
        subTotal,
        tax,
        total,
      };

    default:
      return state;
  }
};

const reducer = combineReducers({ invoiceReducer });

export default reducer;
