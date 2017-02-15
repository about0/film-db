import React, {
  Component
} from 'react';
import DeleteFilmButton from '../shared/DeleteButton';
import InfoButton from '../shared/InfoButton';
import FilmDetails from './FilmDetails';

class FilmItem extends Component {
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
  }

  render() {
    const containerStyle = {
      height: 'auto',
      width: '200px',
      backgroundColor: '#FAF7FF',
      display: 'inline-block',
      margin: 5,
      padding: 5,
      boxShadow: '7px 10px 26px 2px rgba(0,0,0,0.75)',
      alignContent: 'center',
      fontFamily: 'helvetica'
    };

    const itemStyle = {
      flexWrap: 'wrap',
      width: '100%',
      alignContent: 'center',
      paddingBottom: 3
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
             src={this.props.cover}
             style={itemStyle}
             onClick={this._handleClick}
        />
        <div style={{display: 'inline-block', width:'100%'}}>
          <DeleteFilmButton {...this.props}/>
          <InfoButton toggleDetails={this._handleClick}/>
          <FilmDetails
            {...this.props}
            closeModal={this._handleClick}
            isToggled={this.state.isToggled}/>
        </div>
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
