import React, {
  Component,
  PropTypes,
} from 'react';

class FilmDetails extends Component {

  _closeModal() {
  this.props.closeModal();
  }


  render() {
    if(!this.props.isToggled) return null;

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    };

    const backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    };

    return (
      <div>
        <div style={modalStyle}>Test</div>
        <div style={backdropStyle} onClick={this._closeModal.bind(this)}></div>
      </div>
    );
  }
}

FilmDetails.propTypes = {};
FilmDetails.defaultProps = {};

export default FilmDetails;
