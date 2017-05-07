import React from 'react'
import classnames from 'classnames'
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.BUTTON;


class CustomerPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {


    const buttonClass = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--focus`]: this.state.focus,
        [`${CLASS_ROOT}--customer`]: true
      }
    );


    return (
      <div className="list">
        <button onClick={()=>this.props.action(0)} className={buttonClass}>Default</button>
        <button onClick={()=>this.props.action(1)} className={buttonClass}>Nike</button>
        <button onClick={()=>this.props.action(2)} className={buttonClass}>Unilever</button>
        <button onClick={()=>this.props.action(3)} className={buttonClass}>Ford</button>
        <button onClick={()=>this.props.action(4)} className={buttonClass}>Apple</button>
      </div>
    );
  }

};

export default CustomerPanel;
