import React from "react";
import { connect } from "react-redux";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px 20px 0px 20px",
  },
  totalsContainer: {
    width: 200,
    height: 160,
    margin: "0px 30px 10px 0px",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
  },
};

/*
  An auxiliary, miniature table displaying subTotal, tax and total value of all purchases stored in the state and listed in LineItems.
*/
export const Totals = ({ subTotal, tax, total }) => (
  <div style={styles.container}>
    <div style={styles.totalsContainer}>
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>SubTotal</TableRowColumn>
            <TableRowColumn>{subTotal ? `$${subTotal}` : "$"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Tax (5%)</TableRowColumn>
            <TableRowColumn>{tax ? `$${tax}` : "$"}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Total</TableRowColumn>
            <TableRowColumn>{total ? `$${total}` : "$"}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

/*
  Enable Totals to access the state from the redux store via props--required to display subTotal, tax and total.
*/
const mapStateToProps = (store) => {
  return {
    subTotal: store.invoiceReducer.subTotal,
    tax: store.invoiceReducer.tax,
    total: store.invoiceReducer.total,
  };
};

/*
  Connect Totals to the redux store where the state is.
*/
export default connect(mapStateToProps)(Totals);
