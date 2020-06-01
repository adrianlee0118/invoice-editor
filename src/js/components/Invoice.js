import React, { Component } from "react";
import { connect } from 'react-redux';
import { addItem, deleteItem, editItem } from '../actions/actions';

class Invoice extends Component {
  constructor() {
    super();
    this.DeleteItem = this.DeleteItem.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.SetName = this.SetName.bind(this);
    this.SetQuantity = this.SetQuantity.bind(this);
    this.SetPrice = this.SetPrice.bind(this);
    this.state = this.getClearItem();
  }

  getClearItem() {
    return {
      name: '',
      quantity: 0,
      price: 0,
      total: 0
    };
  }

  AddItem(event){
    if (this.state.name && this.state.quantity){
      this.props.dispatch(addItem(this.state.name, this.state.quantity, this.state.price, this.state.total));
    }
  }

  DeleteItem(index, event) {
    this.props.dispatch(deleteItem(index));
  }

  SetName = (event) => {
    const { value } = event.target;
    if (/\d/.test(value)) {
      // Handle error
    }
    this.setState({ name: value });
  };

  SetQuantity = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      //handle error
    }
    //var qty = Math.round(event.target.value);
    this.setState({
      quantity: value,
      total: this.state.quantity*price
    });
  };

  SetPrice = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      //handle error
    }
    //var price = Number(event.target.value);
    this.setState({
      price: value,
      total: this.state.quantity*price
    });
  };

  render() {
    return (
      <div class='container'>
        <h1>Invoice Editor</h1>
        <p>Type in your item, quantity and price. Add or delete using the <span class="text-success">&#x2713;</span> 
        and <span class="text-warning">&#x2717;</span> controls.</p>
        <p>You need at least an item name and quantity to add the entry.</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input 
                  type='text' 
                  onChange={this.SetName}
                  placeholder='new item'
                  value={this.state.name}
                />
              </td>
              <td>
                <input
                  type='number'
                  onChange={this.SetQuantity}
                  placeholder={0}
                  value={this.state.quantity}/>
              </td>
              <td>
                <input
                  type='number'
                  onChange={this.SetPrice}
                  placeholder={0}
                  value={this.state.price}
                />
              </td>
              <td class ='text-right'>
                {(this.state.total).toLocaleString('en-US',{style: 'currency', currency: 'USD'})}
              </td>
              <td>
                <span 
                  class='text-success action-button'
                  onClick={this.AddItem}
                >
                  &#x2713
                </span>
              </td>
            </tr>
            {this.props.items.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td class='text-right'>{(item.price).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
                  <td class='text-right'>{(item.total).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
                  <td><span class='text-warning action-button' onClick={this.DeleteItem.bind(null,index)}>&#x2717</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <table class='table table-bordered totals-table'>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>{(this.props.totals.subtotal).toLocaleString("en-US",{style: "currency", currency: "USD"})}</td>
            </tr>
            <tr>
              <th>Tax (5%)</th>
              <td>{(this.props.totals.tax).toLocaleString("en-US",{style: "currency", currency: "USD"})}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{(this.props.totals.total).toLocaleString("en-US",{style: "currency", currency: "USD"})}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//Map state from Redux store to props to be accessed by Invoice
function mapStateToProps(state){
  return {
    items: state.items,
    totals: state.totals
  };
}

//Provide Invoice with access to Redux store state
export default connect(mapStateToProps)(Invoice);
