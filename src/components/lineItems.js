import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TrashIcon from 'material-ui/svg-icons/action/delete';
import { deleteItem, editItem } from '../actions/actions';

const headerStyle = {
  fontSize: '20px', 
  fontWeight: "bold", 
  color: '#000000'
}

const lineStyle = {
  fontSize: '15px',
  fontWeight: "400", 
  color: '#008080'
}

/*
 * Renders the store line items portion of the invoice.
*/
export const LineItems = ({ listItems, dispatch }) => {
  const handleRemove = position => dispatch(deleteItem(position));

  const handleChange = (event) => {
    const { newVal } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorPrice: "please enter a number" });
    }
    dispatch(editItem(position, newValue, type));
  };

  return (
    <Table style={{
      whiteSpace: "normal",
      wordWrap: "break-word"
    }} >
      <TableHeader
        style={{ background: '#d3d3d3', height: '50px' }}
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn style={headerStyle} >Item</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle} >Qty</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle} >Price</TableHeaderColumn>
          <TableHeaderColumn style={headerStyle} >Total</TableHeaderColumn>
          <TableHeaderColumn style={{ width: 15 }} />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>

        {listItems.map((element, index) => (
          <TableRow key={index}>
            <TableRowColumn style={lineStyle} >{element.item}</TableRowColumn>
            <TableRowColumn style={lineStyle} >{element.qty}</TableRowColumn>
            <TableRowColumn style={lineStyle} >{'$'+element.price.toLocaleString("en-US",{style: "currency", currency: "USD"})}</TableRowColumn>
            <TableRowColumn style={lineStyle} >{element.total.toLocaleString("en-US",{style: "currency", currency: "USD"})}</TableRowColumn>
            <TableRowColumn style={{ width: 15 }}>
              <TrashIcon
                style={{ width: 18, height: 18 }}
                onClick={() => handleRemove(index)}
                hoverColor="red"
              />
            </TableRowColumn>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  );
};

const mapStateToProps = (store) => {
  return {
    listItems: store.invoiceReducer.listItems,
  };
};

LineItems.propTypes = {
  listItems: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LineItems);
