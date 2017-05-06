import React from 'react'
import '../styles/core.scss'

class AppContainer extends React.Component {

  render () {
    return (
        <div className="seek">
          <div className="seek-product">
            <div className="seek-product__info">
              <h3 className="seek-product__title">Classic Ad</h3>
              <span className="seek-product__price highlight">$26.99</span>
              <button className="seek-button seek-button--cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="seek-button--cart__text">Add to cart</span></button>
            </div>
            <label className="seek-product__add">
              <input className="check-hidden" type="checkbox" />
              <i className="fa fa-plus"></i><i class="fa fa-check"></i>
              <span className="seek-product__add--invisible">Add to compare</span></label>
          </div>

          <div className="seek-product">
            <div className="seek-product__info">
              <h3 className="seek-product__title">Classic Ad</h3>
              <span className="seek-product__price highlight">$26.99</span>
              <button className="seek-button seek-button--cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="seek-button--cart__text">Add to cart</span></button>
            </div>
            <label className="seek-product__add">
              <input className="check-hidden" type="checkbox" />
              <i className="fa fa-plus"></i><i class="fa fa-check"></i>
              <span className="seek-product__add--invisible">Add to compare</span></label>
          </div>

          <div className="seek-product">
            <div className="seek-product__info">
              <h3 className="seek-product__title">Classic Ad</h3>
              <span className="seek-product__price highlight">$26.99</span>
              <button className="seek-button seek-button--cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="seek-button--cart__text">Add to cart</span></button>
            </div>
            <label className="seek-product__add">
              <input className="check-hidden" type="checkbox" />
              <i className="fa fa-plus"></i><i class="fa fa-check"></i>
              <span className="seek-product__add--invisible">Add to compare</span></label>
          </div>

          <div className="seek-product">
            <div className="seek-product__info">
              <h3 className="seek-product__title">Classic Ad</h3>
              <span className="seek-product__price highlight">$26.99</span>
              <button className="seek-button seek-button--cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="seek-button--cart__text">Add to cart</span></button>
            </div>
            <label className="seek-product__add">
              <input className="check-hidden" type="checkbox" />
              <i className="fa fa-plus"></i><i class="fa fa-check"></i>
              <span className="seek-product__add--invisible">Add to compare</span></label>
          </div>
        </div>
    )
  }
}

export default AppContainer
