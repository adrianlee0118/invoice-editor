import invoiceReducer from './reducers/reducer';
import { ADD_NEW_ITEM, REMOVE_ITEM, CHANGE_ITEM, CALCULATE_TAX_TOTAL } from './actions/actions';

describe('Invoice reducer testing', () => {

    it('should handle initial state', () => {
        expect(
            invoiceReducer(undefined, {})
        ).toEqual({
            listItems: [],
            subTotal: 0,
            tax: 0,
            total: 0,
        });
    });

    it('should handle ADD_NEW_ITEM', () => {

        let addItem = invoiceReducer({
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


    it('should handle REMOVE_ITEM', () => {

        let removeItem = invoiceReducer({
            items: [],
            subTotal: 0,
            taxTotal: 0,
            grandTotal: 0
        }, {
            type: REMOVE_ITEM,
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


    it('should handle CHANGE_ITEM', () => {

        let changeItem = invoiceReducer({
            items: [],
            subTotal: 0,
            taxTotal: 0,
            grandTotal: 0
        }, {
            type: CHANGE_ITEM,
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


    it('should handle CALCULATE_TAX_TOTAL', () => {

        let calculateItem = invoiceReducer({
            items: [],
            subTotal: 0,
            taxTotal: 0,
            grandTotal: 0
        }, {
            type: CALCULATE_TAX_TOTAL,
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