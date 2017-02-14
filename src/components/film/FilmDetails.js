import React, {
  Component
} from 'react';
import DeleteFilmButton from '../shared/DeleteButton';

class FilmDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isToggled: false
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    this.setState({
      isToggled: !this.state.isToggled
    });

    if (this.state.isToggled) {

    }
  }

  render() {
    const containerStyle = {
      height: 600,
      width: '35%',
      backgroundColor: '#FAF7FF',
      display:'inline-block',
      margin: '0px 10px 0px 10px',
      padding: "0px 10px 0px 10px",
      boxShadow: '7px 10px 26px 2px rgba(0,0,0,0.75)',
      alignContent: 'top'
    };

    const itemStyle = {
      flexWrap: 'wrap',
      height: '60%'
    };

    const castStyle = {
      width: '90%',
      display: 'flex'
    };

    const ratingStyle = {
      borderRadius: '50%',
      height: 30,
      width: 30,
      verticalAlign: 'middle',
      lineHeight: '30px',
      backgroundColor: 'red',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: 'bold'
    };

    return (
      <div style={containerStyle}>
        <h3>{this.props.name}</h3>
      <img alt={`Cover ${this.props.name}`}
        id="film-item"
        src={this.props.cover}
        style={itemStyle}
        onClick={this._handleClick}
      />
        <div style={ratingStyle}>
          {this.props.rating}
        </div>
        <DeleteFilmButton unId={this.props.unId} update={this.props.callBack}/>
        <div>
          {this.props.year}
        </div>
        <div style={castStyle}>
          Cast:
          {this.props.cast}
        </div>
      </div>
    );
  }
}

FilmDetails.propTypes = {
  callBack: React.PropTypes.func,
  year: React.PropTypes.number,
  cover: React.PropTypes.string
};
FilmDetails.defaultProps = {};

export default FilmDetails;
