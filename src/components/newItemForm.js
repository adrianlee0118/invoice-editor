/* eslint-disable react/jsx-boolean-value */
/* eslint-disable  no-restricted-globals */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Paper,
  TextField,
  Table,
  TableRow,
  TableRowColumn,
  TableBody,
} from "material-ui";

import { submitItem } from "../actions/actions";
import { ContentAddCircle } from "material-ui/svg-icons";

const styles = {
  paper: {
    height: 70,
  }
};

export class InputInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      qty: "",
      price: "",
      errorItem: "",
      errorQty: "",
      errorPrice: "",
    };
  }

  handleChangeItem = (event) => {
    const { value } = event.target;
    if (/\d/.test(value)) {
      return this.setState({ errorItem: "names can only contain letters" });
    }

    return this.setState({
      item: value,
      errorItem: "",
    });
  };

  handleChangeQty = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorQty: "please enter a number" });
    }

    return this.setState({
      qty: value,
      errorQty: "",
    });
  };

  handleChangePrice = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorPrice: "please enter a number" });
    }
    return this.setState({
      price: value,
      errorPrice: "",
    });
  };

  handleSubmit = () => {
    const { item, qty, price } = this.state;
    const { dispatch } = this.props;
    if (item && qty && price) {
      this.setState({
        item: "",
        qty: "",
        price: "",
      });
      dispatch(submitItem({ item, qty, price }));
    }
  };

  handleClear = () => this.setState({ item: "", qty: "", price: "" });

  render() {
    return (
      <div style={styles}>
        <Paper style={styles.paper}>
          <Table height="70px">
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
                    fullWidth={true}
                    id="qty-field"
                    value={this.state.qty}
                    errorText={this.state.errorQty}
                    onChange={this.handleChangeQty}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField
                    fullWidth={true}
                    id="price-field"
                    value={this.state.price}
                    errorText={this.state.errorPrice}
                    onChange={this.handleChangePrice}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  {this.state.qty * this.state.price}
                </TableRowColumn>
                <TableRowColumn style={{ width: 15 }}>
                  <ContentAddCircle
                    style={{ width: 18, height: 18 }}
                    onClick={this.handleSubmit}
                    hoverColor="green"
                  />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

InputInvoice.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InputInvoice);
