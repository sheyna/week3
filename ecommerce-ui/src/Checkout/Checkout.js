import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem';
import CheckoutTotal from '../CheckoutListItem/CheckoutTotal';
import './Checkout.css';

class Checkout extends Component {

  render() {
    const listItemsBnbs =  this.props.itemsInCart;
    const listItems =  listItemsBnbs.map((item, indx) => {
      return <CheckoutListItem key={indx} id={indx} item={item} removeItemFromCart={this.props.removeItemFromCart}/>;
    });
    return (
      <section className="page-content">
        <h2 className="section-heading">Items in Shopping Cart</h2>
        <ul className="checkout-list">
          {listItems}
          <CheckoutTotal items={listItemsBnbs}/>
        </ul>
      </section>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  removeItemFromCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  item: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string,
    country: PropTypes.string,
    paymentCost: PropTypes.number.isRequired,
    paymentDescription: PropTypes.string,
    stay: PropTypes.string.isRequired
  }))
};
