import React from 'react';
import Paper from 'material-ui/Paper';
import LineItems from './lineitems';
import NewItemForm from './newitemform';
import Totals from './totals';

const style = {
    height: 600,
    width = 700,
    marginTop: 100,
    display: 'flex-inline',
    flexDirection: 'row',
};

const InvoiceContainer = () => (
    <div style={style}>
        <Paper>
            <LineItems />
            <NewItemForm />
            <Totals />
        </Paper>
    </div>
);

export default InvoiceContainer;