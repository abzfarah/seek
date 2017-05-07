import React from 'react'
import Button from '../components/Button'
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
        <Button onClick={()=>this.props.action(0)} className={buttonClass} label='Default'/>
        <Button onClick={()=>this.props.action(1)} className={buttonClass} label='Nike'/>
        <Button onClick={()=>this.props.action(2)} className={buttonClass} label='Unilever'/>
        <Button onClick={()=>this.props.action(3)} className={buttonClass} label='Ford'/>
        <Button onClick={()=>this.props.action(4)} className={buttonClass} label='Apple'/>
      </div>
    );
  }

};

export default CustomerPanel;
