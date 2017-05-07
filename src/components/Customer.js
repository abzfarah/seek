import React from 'react'


class Customer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {

    return (
      <div className="list">
        <button onClick={()=>this.props.action(0)} className="btn btn-8 btn-8g">Default</button>
        <button onClick={()=>this.props.action(1)} className="btn btn-8 btn-8g">Nike</button>
        <button onClick={()=>this.props.action(2)} className="btn btn-8 btn-8g">Unilever</button>
        <button onClick={()=>this.props.action(3)} className="btn btn-8 btn-8g">Ford</button>
        <button onClick={()=>this.props.action(4)} className="btn btn-8 btn-8g">Apple</button>
      </div>
    );
  }

};


export default Customer;
