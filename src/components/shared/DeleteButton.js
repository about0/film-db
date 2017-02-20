//noinspection JSUnresolvedVariable
import React from 'react';
import axios from 'axios';

const HOST = 'https://fathomless-cliffs-31881.herokuapp.com';

class DeleteFilmButton extends React.Component {
  constructor(props) {
    super(props);

    this._deleteFilmCall = this._deleteFilmCall.bind(this);
  }

  _deleteFilmCall() {
    axios.delete(`${HOST}/api/films/${this.props.unId}`)
      .then(res => {
        console.log(`Successful deleted ${JSON.stringify(res)}`);
      }, err => {
        console.log(`Error! ${err}`);
      }).then(() => {
      this.props.callBack();
    })
  }

  render() {
    return (
        <button
          onClick={this._deleteFilmCall}
          className="btn btn-danger"
        >
          DELETE
        </button>
    );
  }
}
;

DeleteFilmButton.propTypes = {
  _deleteFilmCall: React.PropTypes.func,
  update: React.PropTypes.func
};
DeleteFilmButton.defaultProps = {};

export default DeleteFilmButton;
