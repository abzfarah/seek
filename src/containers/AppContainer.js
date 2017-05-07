import React from 'react'

import '../styles/core.scss'

class AppContainer extends React.Component {

  render () {
    return (
        <div className="seek">

          <div className="seek-product--container">
            <div className="list">
              <button className="btn btn-8 btn-8g">Default</button>
              <button className="btn btn-8 btn-8g">Nike</button>
              <button className="btn btn-8 btn-8g">Unilever</button>
              <button className="btn btn-8 btn-8g">Ford</button>
              <button className="btn btn-8 btn-8g">Apple</button>
            </div>
            <div className="seek-product">
            <div className="seek-product__info">
              <h3 className="seek-product__title">Classic Ad</h3>
              <span className="seek-product__price hghlight">$269.99</span>
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
                <h3 className="seek-product__title">Standout Ad</h3>
                <span className="seek-product__price highlight">$322.99</span>
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
                <h3 className="seek-product__title">Premium Ad</h3>
                <span className="seek-product__price highlight">$349.99</span>
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



        </div>
    )
  }
}

export default AppContainer
