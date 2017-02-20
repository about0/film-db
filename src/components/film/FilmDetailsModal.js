import React, {
  Component,
  PropTypes,
} from 'react';
import ReactModal from 'react-modal';

class FilmDetailsModal extends Component {

  render() {
    return (
      <ReactModal
        isOpen={this.props.showInfoModal}
        contentLabel="Modal example">
        <div>
          <div>
            {this.props.name || 'Not defined'}
          </div>
          <img src={this.props.cover_image}
               alt=""
               style={{position: "absolute",
                 top: 25,
                 right: 25,
                 maxWidth: '30vw',
                 maxHeight: "60vh",
                 border: '2px double #ACACAC'}}
          />
          <div>
            {this.props.year || 'Not defined'}
          </div>
          <span>{this.props.rating}</span>
          <div>Format: {this.props.format || 'Not defined'}</div>
          <div>
            Cast: {this.props.cast || 'Not defined'}
          </div>
          <button
            onClick={this.props.closeModal}
            className="btn btn-danger"
            style={{position: 'absolute', bottom: 5, right: 5, margin: 0}}
          >
            Close
          </button>
        </div>
        <div></div>
      </ReactModal>
    )
      ;
  }
}

FilmDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};
FilmDetailsModal.defaultProps = {};

export default FilmDetailsModal;
