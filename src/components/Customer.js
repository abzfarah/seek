import React from 'react'


class Customer extends React.Component {

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
      <div className="list">
        <button className="btn btn-8 btn-8g">Default</button>
        <button className="btn btn-8 btn-8g">Nike</button>
        <button className="btn btn-8 btn-8g">Unilever</button>
        <button className="btn btn-8 btn-8g">Ford</button>
        <button className="btn btn-8 btn-8g">Apple</button>
      </div>
    );
  }

};


export default Customer;
