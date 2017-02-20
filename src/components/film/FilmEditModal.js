import React, {
  Component,
  PropTypes,
} from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

const HOST = 'https://fathomless-cliffs-31881.herokuapp.com';

class FilmEditModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios.put(`${HOST}/api/films/${this.props.unId}`, {
        name: this.state.name,
        cover_image: this.state.cover_image,
        year: this.state.year,
        format: this.state.format,
        cast: this.state.cast
      })
      .then(res => {
        console.log(`Successfully updated ${JSON.stringify(res)}`);
      }, err => {
        console.log(`Error! ${err}`);
      }).then(() => {
      this.props.callBack();
      this.props.closeModal();
    })
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showEditModal}
        contentLabel="Edit Film"
      >
        <form onSubmit={this._handleSubmit}>
          <label>
            Film Name:
            <input type="text"
                   name="name"
                   defaultValue={this.props.name}
                   onChange={this._handleChange}/>
          </label>
          <br/>
          <label>
            Edit Image source:
            <input type="text"
                   name="cover_image"
                   defaultValue={this.props.cover}
                   onChange={this._handleChange}

            />
          </label>
          <br/>
          <label>
            Year:
            <input
              type="text"
              name="year"
              defaultValue={this.props.year}
              onChange={this._handleChange}
            />
          </label>
          <br/>
          <label htmlFor="format">
            Format:
            <select
              type="text"
              name="format"
              defaultValue={this.props.format}
              onChange={this._handleChange}
            >
              <option value="DVD">DVD</option>
              <option value="Blue-Ray">Blue-Ray</option>
              <option value="VHS">VHS</option>
            </select>
          </label>
          <br/>
          <label>
            Cast:
            <textarea
              type="text"
              name="cast"
              defaultValue={this.props.cast}
              onChange={this._handleChange}
            />
          </label>
          <img src={this.state.cover_image || this.props.cover_image} alt="" style={{position: "absolute", top: 25, right: 25, width: "50%"}}/>
          <input type="submit" value="Save"/>
        </form>
        <button onClick={this.props.closeModal}>Close</button>
      </ReactModal>
    );
  }
}

FilmEditModal.propTypes = {
  showEdit: PropTypes.bool
};
FilmEditModal.defaultProps = {};

export default FilmEditModal;
