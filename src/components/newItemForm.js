import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TextField,
  FloatingActionButton
} from "material-ui/Table";
import { submitItem } from "../actions/actions";

/*
    NewItemForm component exists as a class so that it can have its own internal state consisting of the particulars of a new item to be added.
    Its appearance is just that of an empty row with input capability extending from the bottom of the table formed by the LineItems function component.
*/
export class NewItemForm extends React.Component {
  
  state = {
    item: "",
    qty: "",
    price: "",
    errorItem: "",
    errorQty: "",
    errorPrice: "",
  };

  handleChangeItem = (event) => {
    const { value } = event.target;
    if (/\d/.test(value)) {
      return this.setState({ errorItem: 'Names can only contain letters' });
    }

    return this.setState({
      item: value,
      errorItem: '',
    });
  };

  handleChangeQty = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorQty: 'Please enter a number' });
    }

    return this.setState({
      qty: value,
      errorQty: '',
    });
  };

  handleChangePrice = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorPrice: 'Please enter a number' });
    }
    return this.setState({
      price: value,
      errorPrice: '',
    });
  };

  handleSubmit = () => {
    const { item, qty, price } = this.state;
    const { dispatch } = this.props;
    if (item && qty && price) {
      this.setState({
        item: '',
        qty: '',
        price: '',
      });
      dispatch(submitItem({ item, qty, price }));
    }
  }

  render() {
    return (
      <Table height="45px">
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>
                <TextField
                    fullWidth={true}
                    id="item-field"
                    value={this.state.item}
                    errorText={this.state.errorItem}
                    onChange={this.handleChangeItem}
                />
            </TableRowColumn>
            <TableRowColumn>
                <TextField
                    id="qty-field"
                    value={this.state.qty}
                    errorText={this.state.errorQty}
                    onChange={this.handleChangeQty}
                />
            </TableRowColumn>
            <TableRowColumn>
                <TextField
                    id="price-field"
                    value={this.state.price}
                    errorText={this.state.errorPrice}
                    onChange={this.handleChangePrice}
                />
            </TableRowColumn>
            <TableRowColumn>
                {this.state.total}
            </TableRowColumn>
            <TableRowColumn style={{ width: 15 }}>
                <FloatingActionButton
                    onClick={this.handleSubmit}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

/*
  Type checking data validation for props.
*/
NewItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
    Connect to Redux store, no need for map state to props because NewItemForm does not need to access the state.
    It only uses dispatch to change the state by adding items.
*/
export default connect()(NewItemForm);
