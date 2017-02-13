import React, {
  Component,
  PropTypes,
} from 'react';
import Axios from 'axios';

const FILMS = [];

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      cover: ''
    }
  }

  componentDidMount() {
    this.serverRequest = Axios.get('https://raw.githubusercontent.com/about0/film-db/master/src/data/dummyFilms.json')
      .then(result => {
        result.data.films.forEach(film => {
          FILMS.push(film)
        });
        this.setState({
          cover: result.data.films[0].cover_image
        });
        console.log(FILMS);
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    return (
      <div>
        <img src={this.state.cover} alt=""/>
        <div>{this.state.films}</div>
      </div>
    );
  }
}

FilmDetails.propTypes = {};
FilmDetails.defaultProps = {};

export default FilmDetails;
