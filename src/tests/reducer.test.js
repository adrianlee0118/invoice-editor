import invoiceReducer from "./reducers/reducer";
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  CALCULATE_TAX_TOTAL,
} from "./actions/actions";

describe("Invoice reducer testing", () => {
  //Check that the initial state is as stipulated in reducer file
  it("should handle initial state", () => {
    expect(invoiceReducer(undefined, {})).toEqual({
      listItems: [],
      subTotal: 0,
      tax: 0,
      total: 0,
    });
  });

  //Check that ADD_NEW_ITEM request modifies the state as expected
  it("should handle ADD_NEW_ITEM", () => {
    expect(
      invoiceReducer(
        {
          //initial state
          listItems: [],
          subTotal: 0,
          tax: 0,
          total: 0,
        },
        {
          //action called with payload
          type: ADD_NEW_ITEM,
          itemData: {
            item: "Jeans",
            qty: 1,
            price: 12.99,
            total: 12.99,
          },
        }
      )
    ).toEqual(
      {
        //expected new state
        listItems: [
          {
            item: "Jeans",
            qty: 1,
            price: 12.99,
            total: 12.99,
          },
        ],
        subTotal: 12.99,
        tax: 0.6495,
        total: 13.6395,
      }
    );
  });


  //Check that REMOVE_ITEM request modifies the state as expected
  it("should handle REMOVE_ITEM", () => {
    let removeItem = invoiceReducer(
      {
        items: [],
        subTotal: 0,
        taxTotal: 0,
        grandTotal: 0,
      },
      {
        type: REMOVE_ITEM,
        payload: {
          name: "Filing Cabinet",
          quantity: 3,
          price: 39.99,
        },
      }
    );

    expect(addItem.items.length).toEqual(1);
    expect(addItem.subTotal).toEqual(119.97);
    expect(addItem.taxTotal).toEqual(5.9985);
    expect(addItem.grandTotal).toEqual(125.9685);
  });

  it("should handle CHANGE_ITEM", () => {
    let changeItem = invoiceReducer(
      {
        items: [],
        subTotal: 0,
        taxTotal: 0,
        grandTotal: 0,
      },
      {
        type: CHANGE_ITEM,
        payload: {
          name: "Filing Cabinet",
          quantity: 3,
          price: 39.99,
        },
      }
    );

    expect(addItem.items.length).toEqual(1);
    expect(addItem.subTotal).toEqual(119.97);
    expect(addItem.taxTotal).toEqual(5.9985);
    expect(addItem.grandTotal).toEqual(125.9685);
  });

  it("should handle CALCULATE_TAX_TOTAL", () => {
    let calculateItem = invoiceReducer(
      {
        items: [],
        subTotal: 0,
        taxTotal: 0,
        grandTotal: 0,
      },
      {
        type: CALCULATE_TAX_TOTAL,
        payload: {
          name: "Filing Cabinet",
          quantity: 3,
          price: 39.99,
        },
      }
    );

    expect(addItem.items.length).toEqual(1);
    expect(addItem.subTotal).toEqual(119.97);
    expect(addItem.taxTotal).toEqual(5.9985);
    expect(addItem.grandTotal).toEqual(125.9685);
  });
});
