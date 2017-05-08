import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames, { namespace } from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.BUTTON;

export default class Button extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseDown.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this.state = {
      mouseActive: false,
      focus: false,
      currentCustomer: 0
    };
  }

  _onClick (event) {
    const { method, onClick, path, index} = this.props;

    event.preventDefault();

    if (onClick) {
      onClick(...arguments);
    }
  }

  _onMouseDown (event) {
    const { onMouseDown } = this.props;
    this.setState({ mouseActive: true });
    if (onMouseDown) {
      onMouseDown(event);
    }
  }

  _onMouseUp (event) {
    const { onMouseUp } = this.props;
    this.setState({ mouseActive: false });
    if (onMouseUp) {
      onMouseUp(event);
    }
  }

  _onFocus (event) {
    const { onFocus } = this.props;
    const { mouseActive } = this.state;
    if (mouseActive === false) {
      this.setState({ focus: true });
    }
    if (onFocus) {
      onFocus(event);
    }
  }

  _onBlur (event) {
    const { onBlur } = this.props;
    this.setState({ focus: false });
    if (onBlur) {
      onBlur(event);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.index !== this.state.currentCustomer ) {
      this.setState({
        currentCustomer: nextProps.index
      })
    }

  }

  render () {

    const {
     children, className,
      label, onClick, customer, cart, index
    } = this.props;

    let buttonLabel;

    buttonLabel = <span className={`${CLASS_ROOT}__label`}>{label}</span>;



    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--focus`]: this.state.focus,
        [`${CLASS_ROOT}--customer`]: customer,
        [`${CLASS_ROOT}--cart`]: cart,
        [`${CLASS_ROOT}--customer--default`]: this.props.index == 0 ? true : false,
        [`${CLASS_ROOT}--customer--unilever`]: this.props.index == 1 ? true : false,
        [`${CLASS_ROOT}--customer--apple`]: this.props.index == 2 ? true : false,
        [`${CLASS_ROOT}--customer--nike`]: this.props.index == 3 ? true : false,
        [`${CLASS_ROOT}--customer--ford`]: this.props.index == 4 ? true : false,


      },
      className
    );

    return (
      <button

           onClick={this._onClick}
           className={classes}
           onMouseDown={this._onMouseDown}
           onMouseUp={this._onMouseUp}
           onFocus={this._onFocus} onBlur={this._onBlur}>
        { buttonLabel }
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  accent: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  customer: PropTypes.bool,
  cart: PropTypes.bool
};

Button.defaultProps = {
  index: 0
};
