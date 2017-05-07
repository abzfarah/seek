import React from 'react'
import Customer from '../components/Customer'
import Product from '../components/Product'

import '../styles/core.scss'

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCustomer: 0
    }

    this.changeCustomer = this.changeCustomer.bind(this)
  }

  // This method will be sent to the child component
  changeCustomer(index) {
    debugger
    this.setState({
      currentCustomer: index
    });
  }

  render () {
    return (
        <div className="seek">

          <div className="seek-product--container">

            <Customer action={this.changeCustomer} />

            <Product/>
          </div>

        </div>
    )
  }
}

export default AppContainer
