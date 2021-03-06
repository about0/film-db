import React, {
  Component
} from 'react';

import DeleteFilmButton from '../shared/DeleteButton';
import InfoButton from '../shared/InfoButton';
import FilmDetailsModal from './FilmDetailsModal';
import FilmEditModal from './FilmEditModal';

class FilmItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showInfoModal: false,
      showEditModal: false
    };

    this._handleOpenModal = this._handleOpenModal.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
    this._handleOpenEditModal = this._handleOpenEditModal.bind(this);
    this._handleCloseEditModal = this._handleCloseEditModal.bind(this);
  }


  _handleOpenModal() {
    this.setState({
      showInfoModal: true
    })
  }

  _handleCloseModal() {
    this.setState({
      showInfoModal: false
    })
  }

  _handleOpenEditModal() {
    this.setState({
      showEditModal: true
    })
  }

  _handleCloseEditModal() {
    this.setState({
      showEditModal: false
    })
  }

  render() {
    const containerStyle = {
      maxWidth: '200px',
      backgroundColor: '#ffffff',
      display: 'inline-block',
      margin: 2,
      padding: 5,
      alignContent: 'center',
      fontFamily: 'helvetica',
      border: '1px solid #ACACAC',
      borderRadius: 3

    };

    const imageStyle = {
      flexWrap: 'wrap',
      maxWidth: '100%',
      maxHeight: 'auto',
      alignContent: 'center',
      marginBottom: 5,
      cursor: 'pointer',
      border: '2px solid #ACACAC'
    };

    const nameStyle = {
      alignContent: 'center',
      margin: 0
    };

    return (
      <div style={containerStyle}>
        <h3 style={nameStyle}>{this.props.name}</h3>
        <img alt={`Cover ${this.props.name}`}
             id="film-item"
             src={this.props.cover_image}
             style={imageStyle}
             onClick={this._handleOpenModal}
        />
        <div style={{display: 'inline-block', width:'100%'}}>
          <DeleteFilmButton {...this.props}/>
          <InfoButton toggleDetails={this._handleOpenModal}/>
          <button
            className="btn btn-default"
            onClick={this._handleOpenEditModal}
            style={{marginLeft: 5}}>
            Edit
          </button>
        </div>
        <FilmDetailsModal
          {...this.props}
          closeModal={this._handleCloseModal}
          showInfoModal={this.state.showInfoModal}/>
        <FilmEditModal
          {...this.props}
          closeModal={this._handleCloseEditModal}
          showEditModal={this.state.showEditModal}
        />
      </div>
    );
  }
}

FilmItem.propTypes = {
  callBack: React.PropTypes.func,
  year: React.PropTypes.number,
  cover: React.PropTypes.string
};
FilmItem.defaultProps = {};

export default FilmItem;
