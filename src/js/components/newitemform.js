import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TextField,
} from "material-ui/Table";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { addItem } from "../actions/actions";


/*
    NewItemForm component exists as a class so that it can have its own internal state consisting of the particulars of a new item to be added.
*/
export class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      qty: "",
      price: "",
      total: '',
      errorItem: "",
      errorQty: "",
      errorPrice: "",
    };
  }

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
      total: value*this.state.price,
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
      total: this.state.qty*value,
      errorPrice: '',
    });
  };

  handleSubmit = () => {
    const { item, qty, price, total } = this.state;
    const { dispatch } = this.props;
    if (item && qty && price) {
      this.setState({
        item: '',
        qty: '',
        price: '',
        total: '',
      });
      dispatch(addItem({ item, qty, price, total }));
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
            <TableRowColumn>{`$${element.total}`}</TableRowColumn>
            <TableRowColumn style={{ width: 15 }}>
              <TrashIcon
                style={{ width: 18, height: 18 }}
                onClick={() => handleRemove(index)}
                hoverColor="blue"
              />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

NewItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

/*
    Connect to Redux store, no need for map state to props because NewItemForm does not need to access the state
*/
export default connect()(NewItemForm);
