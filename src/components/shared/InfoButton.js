import React, {
  PropTypes,
} from 'react';

const InfoButton = (props) => {
  return (
      <button className={'btn btn-info pull-right'} onClick={props.toggleDetails}>Info</button>
  );
};

InfoButton.propTypes = {
  toggleDetails: PropTypes.func
};
InfoButton.defaultProps = {};

export default InfoButton;
