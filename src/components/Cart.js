import React from 'react'
import { CUSTOMER, PRODUCT, PRODUCT_ENUM, CUSTOMER_ENUM, DEFAULT_CART } from '../utils/constants'

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  closeCart() {
  }

  openCart() {
  }

  removeFromCart() {
  }


  render() {

    const { cart } = this.props

    let products = {}
debugger
    // Don't show item in cart if quanitity is zero
    for (let product in cart.products) {

      var x = cart.products[product].quantity
      if (cart.products[product].quantity !== 0) {
        products[product] = cart.products[product];
      }
    }

    let renderCartItems = (<ul>
      {Object.keys(products).map(function (product) {
        return (
          <li key={product.id}>
            <h3 className="name">{products[product].name}</h3>

            <p className="type">{products[product].name} x {products[product].quantity}</p>

            <p className="price"> ${(products[product].price * products[product].quantity).toFixed(2)}</p>
            <p className="price"> Bonus x {products[product].bonus }  </p>


            <button type="button" className="seek-button--remove-item">Remove</button>


          </li>
        )
      })}
    </ul>
    )

    debugger

    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">


          <button type="button" className="seek-button--close-cart" onClick={this.closeCart}>&times;</button>

          {renderCartItems}

          <span className="total">Total: ${cart.total}</span>
        </div>


        <button type="button" className="view-cart" onClick={this.openCart}>View Cart</button>



      </div>
    );
  }

};


export default Cart;
