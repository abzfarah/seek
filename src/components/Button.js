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
      focus: false
    };
  }

  _onClick (event) {
    const { method, onClick, path} = this.props;

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

  render () {

    const {
     children, className,
      label, onClick, customer, cart
    } = this.props;

    let buttonLabel;

    buttonLabel = <span className={`${CLASS_ROOT}__label`}>{label}</span>;



    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--focus`]: this.state.focus,
        [`${CLASS_ROOT}--customer`]: true,
        [`${CLASS_ROOT}--cart`]: false,
      },
      className
    );

    return (
      <button
           className={classes}
           onMouseDown={this._onMouseDown}
           onMouseUp={this._onMouseUp}
           onFocus={this._onFocus} onBlur={this._onBlur}>
        { buttonLabel }
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

