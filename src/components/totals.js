import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 20px 0px 20px',
  },
  totalsContainer: {
    width: 400,
    height: 160,
    margin: '0px 30px 10px 0px',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  headings: {
    fontWeight: 'bold',
  },
};

export const Totals = ({ subTotal, tax, total }) => (
  <div style={styles.container}>
    <div style={styles.totalsContainer}>
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow >
            <TableRowColumn style={styles.headings} >Subtotal</TableRowColumn>
            <TableRowColumn>{subTotal ? subTotal.toLocaleString("en-US",{style: "currency", currency: "USD"}) : '$'}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={styles.headings} >Tax (5%)</TableRowColumn>
            <TableRowColumn>{tax ? tax.toLocaleString("en-US",{style: "currency", currency: "USD"}) : '$'}</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={styles.headings} >Total</TableRowColumn>
            <TableRowColumn>{total ? total.toLocaleString("en-US",{style: "currency", currency: "USD"}) : '$'}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

const mapStateToProps = (store) => {
  return {
    subTotal: store.invoiceReducer.subTotal,
    tax: store.invoiceReducer.tax,
    total: store.invoiceReducer.total,
  };
};

Totals.propTypes = {
  subTotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Totals);

