import React, {
  Component,
  PropTypes,
} from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

const HOST = 'https://95.158.2.12:3333';

class FilmAddModal extends Component {
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
    const value = target.type === 'checkbox' ? target.checked : target.value.trim();
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return;
    axios.post(`${HOST}/api/films/`, {
        name: this.state.name,
        cover_image: this.state.cover_image,
        year: this.state.year,
        format: this.state.format,
        cast: this.state.cast
      })
      .then(res => {
        console.log(`Successfully created ${JSON.stringify(res)}`);
      }, err => {
        console.log(`Error! ${err}`);
      }).then(() => {
      this.props.callBack();
      this.setState({
        cover_image: ''
      });
      this.props.closeModal();
    })
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showAddFilmModal}
        contentLabel="Add Film"
      >
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <label>
              Film Name:
              <input type="text"
                     name="name"
                     className="form-control"
                     placeholder="Enter Film name"
                     onChange={this._handleChange}/>
            </label>
            <br/>
            <label>
              Edit Image source:
              <input type="text"
                     name="cover_image"
                     className="form-control"
                     placeholder="Enter image URL"
                     onChange={this._handleChange}

              />
            </label>
            <br/>
            <label>
              Year:
              <input
                type="text"
                name="year"
                defaultValue={new Date().getFullYear()}
                className="form-control"
                onChange={this._handleChange}
              />
            </label>
            <br/>
            <label htmlFor="format">
              Format:
              <select
                type="text"
                name="format"
                className="form-control"
                defaultValue="DVD"
                onChange={this._handleChange}
              >
                <option value="DVD">DVD</option>
                <option value="Blue-Ray">Blue-Ray</option>
                <option value="VHS">VHS</option>
              </select>
            </label>
            <br/>
            <label htmlFor="cast">
              Cast:
              <textarea
                type="text"
                name="cast"
                className="form-control"
                placeholder="Cast, crew etc."
                onChange={this._handleChange}
              />
            </label>
            <br/>
            <input type="submit" value="Save" className="btn btn-lg btn-success" style={{position: "absolute", bottom: 5, right: 5, margin: 0}}/>
            <img src={this.state.cover_image} alt="" style={{position: "absolute", top: 25, right: 25, width: "50%"}}/>
          </div>
        </form>
        <br/>
        <button onClick={this.props.closeModal} className="btn btn-lg btn-danger" style={{position: "absolute", bottom: 5, left: 5, margin: 0}}>Close</button>
      </ReactModal>
    );
  }
}

FilmAddModal.propTypes = {
  showEdit: PropTypes.bool
};
FilmAddModal.defaultProps = {};

export default FilmAddModal;
