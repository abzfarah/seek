import React from 'react'
import Customer from '../components/Customer'
import Product from '../components/Product'

import '../styles/core.scss'

class AppContainer extends React.Component {

  render () {
    return (
        <div className="seek">

          <div className="seek-product--container">

            <Customer/>

            <Product/>
          </div>

        </div>
    )
  }
}

export default AppContainer
