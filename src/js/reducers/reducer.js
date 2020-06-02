import { ADD_NEW_ITEM, CALCULATE_TAX_TOTAL, REMOVE_ITEM } from '../actions/actions';

const initalState = {
    listItems: [],
    subTotal: null,
    tax: null,
    total: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            updatedItems = [...state.items.items, action.payload];
            subtotal = updatedItems.reduce((sum, item) => {
                return sum + item.total
            }, 0);
            return {
                items: {
                    items: updatedItems
                },
                totals: {
                    subtotal: subtotal,
                    tax: subtotal * 0.05,
                    total: subtotal * 1.05
                }
            };
        case EDIT_ITEM:
            return state;
        case DELETE_ITEM:
            updatedItems = state.items.items.filter((item, index) =>    //should be (item => item.index != action.payload.index)
                index != action.payload.index
            );
            subtotal = newItems.reduce((sum,item) => {
                return sum + item.total
            }, 0);
            return {
                items: {
                    items: updatedItems
                },
                totals: {
                    subtotal: subtotal,
                    tax: subtotal * 0.05,
                    total: subtotal * 1.05
                }
            };
        default:
            return state;
    }
};

export default reducer;