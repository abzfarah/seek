import React from 'react'


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

    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>&times;</button>
          <ul>

            <li key="0">
              <h1 className="name">Apple}</h1>

              <p className="type">40oz Bottle x 1</p>

              <p className="price">
                40oz Bottle x 1</p>
              <button type="button" className="remove-item"
              >Remove
              </button>
            </li>


            <li key="1">
              <h1 className="name">Apple}</h1>

              <p className="type">40oz Bottle x 1</p>

              <p className="price">
                40oz Bottle x 1</p>
              <button type="button" className="remove-item"
              >Remove
              </button>
            </li>
          </ul>
          <span className="total">Total: ${this.props.total}</span>
        </div>
        <button type="button" className="view-cart">View Cart

        </button>
      </div>
    );
  }

};


export default Cart;
