import React from 'react';
import Paper from 'material-ui/Paper';
import LineItems from './lineItems';
import Totals from './totals';

const style = {
  height: 600,
  width: 700,
  marginTop: 100,
  display: 'flex-inline',
  flexDirection: 'row',
};

const Invoice = () => (
  <div style={style}>
    <Paper>
      <LineItems />
      <Totals />
    </Paper>
  </div>
);

export default Invoice;
