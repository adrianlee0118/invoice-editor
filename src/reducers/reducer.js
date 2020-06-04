import { combineReducers } from "redux";
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  CALCULATE_TAX_TOTAL,
} from "../actions/actions";

const initalState = {
  listItems: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};

/*
 * Handle actions/events related to the invoice line items.
 */
const invoiceReducer = (state = initalState, action) => {
  switch (action.type) {
    //Return state where listItems has been replaced with listItems concatenated with itemData passed from the action.
    case ADD_NEW_ITEM:
      return {
        ...state,
        listItems: [...state.listItems, action.itemData],
      };

    //Return the state where listItems has been filtered to exclude the index specified by the action.
    case REMOVE_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter(
          (item, index) => index !== action.position
        ),
      };

    //Return the state where within listItems the item with the position specified by action has had its variable of type speficied by action replaced by a new value also specified by action.
    //Changes to quantity or price are supported.
    case CHANGE_ITEM:
      const pos = action.itemData.position;
      const val = action.itemData.newValue;
      const type = action.itemData.type;
      let newListItems = [...state.listItems];
      if (type == "qty") newListItems[pos].qty = val;
      else newListItems[pos].price = val;
      newListItems[pos].total = isNaN(action.itemData.newValue)
        ? "a"
        : newListItems[pos].price * newListItems[pos].qty;
      return {
        ...state,
        listItems: newListItems,
      };

    //Return the state where subTotal, tax and total have been overwritten by newly calculated values that are an accurate summary of listItems.
    //Called immediately after state is changed on add, remove or change within listItems.
    case CALCULATE_TAX_TOTAL:
      const subTotal = state.listItems.reduce(
        (acc, item) => acc + (isNaN(item.total) ? 0 : item.total),
        0
      );
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
