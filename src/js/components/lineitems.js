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
