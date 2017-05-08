import React from 'react'
import classnames from 'classnames'
import { CUSTOMER, PRODUCT, PRODUCT_ENUM, CUSTOMER_ENUM } from '../utils/constants'
import Button from '../components/Button'
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.BUTTON;

class ProductMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const { cart } = this.props

    let classicAdPrice, standoutAdPrice, premiumAdPrice

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--focus`]: this.state.focus,
        [`btn-success3d`]: true
      }
    );

    classicAdPrice = cart[PRODUCT_ENUM[PRODUCT.CLASSIC]].price
    standoutAdPrice = cart[PRODUCT_ENUM[PRODUCT.STANDOUT]].price
    premiumAdPrice = cart[PRODUCT_ENUM[PRODUCT.PREMIUM]].price


    return (
      <div className="product-container">
        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Classic Ad</h3>
            <span className="seek-product__price hghlight">{classicAdPrice}</span>

            <Button
              onClick={()=>this.props.add(PRODUCT.CLASSIC)}
              className="seek-button seek-button--cart"
              cart={true} >

              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span>
            </Button>

          </div>

        </div>

        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Standout Ad</h3>
            <span className="seek-product__price highlight">{standoutAdPrice}</span>

            <Button
              onClick={()=>this.props.add(PRODUCT.STANDOUT)}
              className="seek-button seek-button--cart"
              cart={true} >

              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span>
            </Button>

          </div>

        </div>

        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Premium Ad</h3>
            <span className="seek-product__price highlight">{premiumAdPrice}</span>

            <Button
              onClick={()=>this.props.add(PRODUCT.PREMIUM)}
              className="seek-button seek-button--cart"
              cart={true} >

              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span>
            </Button>

          </div>

        </div>
      </div>
    );
  }

};


export default ProductMenu;
