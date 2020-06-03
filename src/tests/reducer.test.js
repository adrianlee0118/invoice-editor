import invoiceReducer from "./reducers/reducer";
import {
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
  CALCULATE_TAX_TOTAL,
} from "./actions/actions";

describe("Invoice reducer testing", () => {
  /*
   * Check that the initial state is as stipulated in reducer file.
   */
  it("should handle initial state", () => {
    expect(invoiceReducer(undefined, {})).toEqual({
      listItems: [],
      subTotal: 0,
      tax: 0,
      total: 0,
    });
  });

  /*
   * Check that ADD_NEW_ITEM request modifies the state as expected. Note: ADD_NEW_ITEM does not re-calculate the totals.
   */
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
          //action called with payload - add "Jeans" to the invoice.
          type: ADD_NEW_ITEM,
          itemData: {
            item: "Jeans",
            qty: 1,
            price: 12.99,
            total: 12.99,
          },
        }
      )
    ).toEqual({
      //expected new state
      listItems: [
        {
          item: "Jeans",
          qty: 1,
          price: 12.99,
          total: 12.99,
        },
      ],
      subTotal: 0,
      tax: 0,
      total: 0,
    });

    //TODO: Test more combinations of initial state, payload and expected new state after adding.
  });

  /*
   * Check that REMOVE_ITEM request modifies the state as expected. Note: REMOVE_ITEM does not re-calculate the totals.
   */
  it("should handle REMOVE_ITEM", () => {
    expect(
      invoiceReducer(
        {
          //initial state
          listItems: [
            {
              item: "Jeans",
              qty: 1,
              price: 12.99,
              total: 12.99,
            },
            {
              item: "Hat",
              qty: 2,
              price: 6.37,
              total: 12.74,
            },
          ],
          subTotal: 25.73,
          tax: 1.2865,
          total: 27.0165,
        },
        {
          //action called with payload - remove "Hat" from the invoice.
          type: REMOVE_ITEM,
          position: 1,
        }
      )
    ).toEqual({
      //expected new state
      listItems: [
        {
          item: "Jeans",
          qty: 1,
          price: 12.99,
          total: 12.99,
        },
      ],
      subTotal: 25.73,
      tax: 1.2865,
      total: 27.0165,
    });

    //TODO: Test more combinations of initial state, payload and expected new state after removing.
  });

  /*
   * Check that CHANGE_ITEM request modifies the state as expected. Note: CHANGE_ITEM does not re-calculate the totals.
   */
  it("should handle CHANGE_ITEM", () => {
    expect(
      invoiceReducer(
        {
          //initial state
          listItems: [
            {
              item: "Jeans",
              qty: 1,
              price: 12.99,
              total: 12.99,
            },
            {
              item: "Hat",
              qty: 2,
              price: 6.37,
              total: 12.74,
            },
          ],
          subTotal: 25.73,
          tax: 1.2865,
          total: 27.0165,
        },
        {
          //action called with payload - increase "Hat" quantity from 2 to 4.
          type: CHANGE_ITEM,
          itemData: {
            position: 1,
            type: "qty",
            newValue: 4,
          },
        }
      )
    ).toEqual({
      //expected new state
      listItems: [
        {
          item: "Jeans",
          qty: 1,
          price: 12.99,
          total: 12.99,
        },
        {
          item: "Hat",
          qty: 4,
          price: 6.37,
          total: 25.48,
        },
      ],
      subTotal: 25.73,
      tax: 1.2865,
      total: 27.0165,
    });

    //TODO: Test more combinations of initial state, payload and expected new state after editing line items.
  });

  /*
   * Check that CALCULATE_TAX_TOTAL updates the totals
   */
  it("should handle CALCULATE_TAX_TOTAL", () => {
    expect(
      invoiceReducer(
        {
          //initial state - totals are incorrect
          listItems: [
            {
              item: "Jeans",
              qty: 1,
              price: 12.99,
              total: 12.99,
            },
            {
              item: "Hat",
              qty: 4,
              price: 6.37,
              total: 25.48,
            },
          ],
          subTotal: 25.73,
          tax: 1.2865,
          total: 27.0165,
        },
        {
          //action called with payload - just the request
          type: CALCULATE_TAX_TOTAL,
        }
      )
    ).toEqual({
      //expected new state - totals updated
      listItems: [
        {
          item: "Jeans",
          qty: 1,
          price: 12.99,
          total: 12.99,
        },
        {
          item: "Hat",
          qty: 4,
          price: 6.37,
          total: 25.48,
        },
      ],
      subTotal: 38.47,
      tax: 1.9235,
      total: 40.3935,
    });

    //TODO: Test more combinations of initial state (with erroneous totals) and expected new state after calculating totals.
  });
});
