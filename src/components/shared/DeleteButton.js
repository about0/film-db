//noinspection JSUnresolvedVariable
import React from 'react';
import Button from './Button';
import axios from 'axios';

const HOST_URL= 'http://localhost:3333/api';

class DeleteFilmButton extends React.Component {
  constructor(props){
    super(props);

    this._deleteFilmCall = this._deleteFilmCall.bind(this);
  }

    _deleteFilmCall() {
      axios.delete(`${HOST_URL}/films/${this.props.unId}`)
        .then(res => {
          console.log(`Successful deleted ${JSON.stringify(res)}`);
        }, err => {
          console.log(`Error! ${err}`);
        }).then(res => {
          this.props.update(res);
    })
    }




  render() {
    return (
      <Button
        functionType={this._deleteFilmCall}
        buttonClass="btn-danger"
      >
        DELETE
      </Button>
    );
  }
};

DeleteFilmButton.propTypes = {
  _deleteFilmCall: React.PropTypes.func,
  update: React.PropTypes.func
};
DeleteFilmButton.defaultProps = {};

export default DeleteFilmButton;
