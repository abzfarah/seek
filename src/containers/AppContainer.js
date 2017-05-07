import React from 'react'
import CustomerPanel from '../components/CustomerPanel'
import ProductMenu from '../components/ProductMenu'

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

            <CustomerPanel
              action={this.changeCustomer}
              currentCustomer={this.state.currentCustomer}

            />

            <ProductMenu/>
          </div>

        </div>
    )
  }
}

export default AppContainer
