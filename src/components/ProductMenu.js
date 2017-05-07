import React from 'react'
import classnames from 'classnames'
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.BUTTON;

class ProductMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--focus`]: this.state.focus,
        [`btn-success3d`]: true
      }
    );

    return (
      <div className="product-container">
        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Classic Ad</h3>
            <span className="seek-product__price hghlight">$269.99</span>
            <button className="seek-button seek-button--cart">
              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span></button>
          </div>

        </div>

        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Standout Ad</h3>
            <span className="seek-product__price highlight">$322.99</span>
            <button className="seek-button seek-button--cart">
              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span></button>
          </div>

        </div>

        <div className="seek-product">
          <div className="seek-product__info">
            <h3 className="seek-product__title">Premium Ad</h3>
            <span className="seek-product__price highlight">$349.99</span>
            <button className="seek-button seek-button--cart">
              <i className="fa fa-shopping-cart"></i>
              <span className="seek-button--cart__text">Add to cart</span></button>
          </div>

        </div>
      </div>
    );
  }

};


export default ProductMenu;
