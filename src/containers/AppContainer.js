import React from 'react'
import CustomerPanel from '../components/CustomerPanel'
import ProductMenu from '../components/ProductMenu'
import { CUSTOMER, PRODUCT, PRODUCT_ENUM, CUSTOMER_ENUM, DEFAULT_CART } from '../utils/constants'
import '../styles/core.scss'

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCustomer: 0,
      cart: {
        CLASSIC: {
          quantity: 0,
          bonus: 0,
          price: 269.99
        },
        STANDOUT: {
          quantity: 0,
          bonus: 0,
          price: 322.99
        },
        PREMIUM: {
          quantity: 0,
          bonus: 0,
          price: 394.99
        },
        total: 0
      }
    }

    this.changeCustomer = this.changeCustomer.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this._processCart = this._processCart.bind(this);
    this._updatePrices = this._updatePrices.bind(this);
  }

  // This method will be sent to the child component
  changeCustomer(index) {
    this.setState({
      currentCustomer: index
    });

    this._resetCart()
    this._updatePrices()

    this.forceUpdate()
  }

  addToCart(sku) {
    let cart = this.state.cart
    cart[PRODUCT_ENUM[sku]].quantity += 1

    this._processCart(sku)
    this.setState({ cart })
  }


  _processCart(sku) {
    let { currentCustomer, cart } = this.state
    let bonus, index = CUSTOMER_ENUM[currentCustomer]

    switch ( currentCustomer ) {

      case CUSTOMER.UNILEVER:
        cart[PRODUCT_ENUM[sku]].bonus = Math.floor(cart[PRODUCT_ENUM[sku]].quantity/2)
        break

      case CUSTOMER.APPLE:

        cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].price = 299.99
        break

      case CUSTOMER.NIKE:
        cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price =
          cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].quantity >= 4 ? 379.99 : cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price
        break

      case CUSTOMER.FORD:
        cart[PRODUCT_ENUM[sku]].bonus = Math.floor(cart[PRODUCT_ENUM[sku]].quantity/4)

        cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].price = 309.99

        cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price =
          cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].quantity >= 3 ? 389.99 : cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price
        break
    }

    cart = this._calculateTotal(cart)
    this.setState({ cart })
  }

  _calculateTotal(cart) {
    let total=0

    for (let product in PRODUCT) {
      total += (cart[product].quantity-cart[product].bonus)*cart[product].price
    }

    console.log(total)

    cart.total = total

    return cart
  }

  _updatePrices() {
    let { currentCustomer, cart } = this.state
    let index = CUSTOMER_ENUM[currentCustomer]

    switch ( currentCustomer ) {

      case CUSTOMER.APPLE:
        cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].price = 299.99
        break
    }

    cart = this._calculateTotal(cart)
    this.setState({ cart })
  }

  _resetCart() {

    let { cart } = this.state

    for (let product in PRODUCT) {
      cart[product].quantity=0;
      cart[product].bonus=0;
      cart[product].price=DEFAULT_CART[product].price;
    }

    cart.total = 0
    this.setState({
      cart
    })
  }

  render () {

    const { currentCustomer, cart } = this.state

    return (
        <div className="seek">

          <div className="seek-product--container">

            <CustomerPanel
              action={this.changeCustomer}
              currentCustomer={this.state.currentCustomer}

            />

            <ProductMenu
              add={this.addToCart}
              cart={cart}
              currentCustomer={currentCustomer}
            />
          </div>

          <div>
            Cart Summary:

            Current Customer: {CUSTOMER_ENUM[currentCustomer]}

            <div>Classic Ads Quantity: {cart[PRODUCT_ENUM[PRODUCT.CLASSIC]].quantity}</div>
            <div>Classic Ads Bonus: {cart[PRODUCT_ENUM[PRODUCT.CLASSIC]].bonus}</div>
            <div>Classic Ads Price: {cart[PRODUCT_ENUM[PRODUCT.CLASSIC]].price}</div>
            <br/>
            <div>Standout Ads Quantity: {cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].quantity}</div>
            <div>Standout Ads Bonus: {cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].bonus}</div>
            <div>Standout Ads Price: {cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].price}</div>
            <br/>
            <div>Premium Ads Quantity: {cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].quantity}</div>
            <div>Premium Ads Bonus: {cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].bonus}</div>
            <div>Premium Ads Price: {cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price}</div>
            <br/>
            Total: {cart.total}
          </div>

        </div>
    )
  }
}

export default AppContainer
