import React from 'react'
import Button from '../components/Button'
import { CUSTOMER, PRODUCT, PRODUCT_ENUM, CUSTOMER_ENUM, DEFAULT_CART } from '../utils/constants'
import classnames from 'classnames';
import CSSClassnames, { namespace } from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.CART;
class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  closeCart() {
  }

  openCart() {
  }

  render() {
    let products = {}

    const { cart, visible } = this.props

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]: this.props.visible,

      }
    );

    console.log(classes)

    // Don't show item in cart if quanitity is zero
    for (let product in cart.products) {
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
            <Button type="button"  className="seek-button--remove-item">Remove</Button>
          </li>
        )
      })}
    </ul>
    )

    return (
      <div className={classes}>
        <div className={`${CLASS_ROOT}__mini`}>
          <Button type="button" className={`${CLASS_ROOT}__mini--close`} onClick={this.closeCart}>&times;</Button>

          {renderCartItems}

          <span className={`${CLASS_ROOT}__mini-total`}>Total: ${cart.total}</span>
        </div>

        <Button type="button" className="seek-cart__mini-total" onClick={this.openCart}>View Cart</Button>

      </div>
    );
  }

};


export default Cart;
