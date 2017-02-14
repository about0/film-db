import React from 'react';

const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.functionType}
      className={`btn ${props.buttonClass}`}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  functionType: React.PropTypes.func.isRequired,
  buttonClass: React.PropTypes.string
};
Button.defaultProps = {
  onClick: console.log('click'),
  children: 'Button',
  buttonClass: 'btn-default'
};

export default Button;
