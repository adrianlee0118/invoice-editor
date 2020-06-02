/* eslint-disable react/jsx-boolean-value */
/* eslint-disable  no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Paper,
  TextField,
  Divider,
  FloatingActionButton,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import { submitItem } from '../actions';


const styles = {
  container: {
    textAlign: 'left',
    display: 'flex-inline',
    flexDirection: 'row',
  },
  paper: {
    padding: 10,
    height: 330,
    width: 330,
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
};

export class InputInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      qty: '',
      price: '',
      errorItem: '',
      errorQty: '',
      errorPrice: '',
    };
  }

  handleChangeItem = (event) => {
    const { value } = event.target;
    if (/\d/.test(value)) {
      return this.setState({ errorItem: 'names can only contain letters' });
    }

    return this.setState({
      item: value,
      errorItem: '',
    });
  };

  handleChangeQty = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorQty: 'please enter a number' });
    }

    return this.setState({
      qty: value,
      errorQty: '',
    });
  };

  handleChangePrice = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      return this.setState({ errorPrice: 'please enter a number' });
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

  handleClear = () => this.setState({ item: '', qty: '', price: '' });


  render() {
    return (
      <div style={styles}>
        <Paper
          style={styles.paper}
        >
          <h3>Add Item</h3>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ width: 100 }}>Item: </p>
            <TextField
              fullWidth={true}
              id="item-field"
              value={this.state.item}
              errorText={this.state.errorItem}
              onChange={this.handleChangeItem}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ width: 100 }}>Quantity : </p>
            <TextField
              id="qty-field"
              value={this.state.qty}
              errorText={this.state.errorQty}
              onChange={this.handleChangeQty}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p style={{ width: 100 }}>Price : </p>
            <TextField
              id="price-field"
              value={this.state.price}
              errorText={this.state.errorPrice}
              onChange={this.handleChangePrice}
            />
          </div>
          <div style={styles.buttonsContainer}>
            <div>
              <FloatingActionButton
                secondary={true}
                mini={true}
                style={{}}
                onClick={this.handleClear}
              >
                <ContentRemove />
              </FloatingActionButton>
            </div>
            <FloatingActionButton
              onClick={this.handleSubmit}
            >
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </Paper>
      </div>
    );
  }
}

InputInvoice.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(InputInvoice);
