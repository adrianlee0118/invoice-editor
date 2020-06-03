import React from "react";
import Paper from "material-ui/Paper";
import LineItems from "./lineItems";
import NewItemForm from "./newItemForm";
import Totals from "./totals";

const style = {
  height: 600,
  width: 1000,
  marginTop: 0,
  display: "flex-inline",
  flexDirection: "row",
};

/**
 * Combines child components on one layout.
 */
const Invoice = () => (
  <div style={style}>
    <Paper>
      <LineItems />
      <NewItemForm />
      <Totals />
    </Paper>
  </div>
);

export default Invoice;
