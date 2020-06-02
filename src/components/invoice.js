import React from 'react';
import Paper from 'material-ui/Paper';
import LineItems from './lineItems';
import NewItemForm from './newItemForm';
import Totals from './totals';

const style = {
    height: 600,
    width: 700,
    marginTop: 100,
    display: 'flex-inline',
    flexDirection: 'row',
};

/*
    The main panel structure that houses all of the function and React components of the app.
*/
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