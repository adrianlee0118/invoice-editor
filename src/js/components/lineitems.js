import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import TrashIcon from "material-ui/svg-icons/action/delete";
import { deleteItem } from "../actions/actions";

/*
  Function component that renders a table displaying all items currently stored in state.
  Columns show Item, Quantity (Qty), Price and Total, with a fifth column containing a delete button for that line item.
*/
export const LineItems = ({ listItems, dispatch }) => {
  const handleRemove = (position) => dispatch(deleteItem(position));

  return (
    <Table height="400px">
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Item</TableHeaderColumn>
          <TableHeaderColumn>Qty</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn style={{ width: 15 }} />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {listItems.map((element, index) => (
          <TableRow key={index}>
            <TableRowColumn>{element.item}</TableRowColumn>
            <TableRowColumn>{element.qty}</TableRowColumn>
            <TableRowColumn>{`$${element.price}`}</TableRowColumn>
            <TableRowColumn>{`$${element.total}`}</TableRowColumn>
            <TableRowColumn style={{ width: 15 }}>
              <TrashIcon
                style={{ width: 18, height: 18 }}
                onClick={() => handleRemove(index)}
                hoverColor="blue"
              />
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

/*
  Enable LineItems to access the state from the redux store via props--required to display all line items.
*/
const mapStateToProps = (store) => {
  return {
    listItems: store.invoiceReducer.listItems,
  };
};

/*
  Type checking data validation for props.
*/
LineItems.propTypes = {
  listItems: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

/*
  Connect LineItems to the redux store where the state is
*/
export default connect(mapStateToProps)(LineItems);
