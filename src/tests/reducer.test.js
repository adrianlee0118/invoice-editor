import invoiceReducer from './reducers/reducer';
import { ADD_NEW_ITEM, REMOVE_ITEM, CHANGE_ITEM, CALCULATE_TAX_TOTAL } from './actions/actions';

describe('todos reducer', () => {
    it('should handle initial state', () => {
        expect(
            rootReducer(undefined, {})
        ).toEqual({
            items: [],
            subTotal: 0,
            taxTotal: 0,
            grandTotal: 0
        });
    });

    it('should handle ADD_NEW_ITEM', () => {

        let addItem = rootReducer({
            items: [],
            subTotal: 0,
            taxTotal: 0,
            grandTotal: 0
        }, {
            type: ADD_NEW_ITEM,
            payload: {
                name: 'Filing Cabinet',
                quantity: 3,
                price: 39.99
            }
        });

        expect(addItem.items.length).toEqual(1);
        expect(addItem.subTotal).toEqual(119.97);
        expect(addItem.taxTotal).toEqual(5.9985);
        expect(addItem.grandTotal).toEqual(125.9685);

    });
})