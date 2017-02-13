import React, {
  Component,
  PropTypes,
} from 'react';
import Axios from 'axios';
import FilmDetails from './FilmDetails';


class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    const FILMS = [];
    this.serverRequest = Axios.get('https://raw.githubusercontent.com/about0/film-db/master/src/data/dummyFilms.json')
      .then(result => {
        result.data.films.forEach(film => {
          FILMS.push(film)
        });
        this.setState({
          films: FILMS
        });
        console.log(this.state);
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    const filmList = [];
    this.state.films.forEach(film => {
      filmList.push(
        <FilmDetails
          cover={film.cover_image}
          key={film.name}
          rating={film.rating}
          cast={film.cast}
          format={film.format}
          year={film.year}
          name={film.name}
        />)
    });

    const containerStyles = {
      padding: 10,
      background: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=35515cff&noise=626262&density=38&opacity=70)',
    };

    return (
      <div style={containerStyles}>
        <ul>{filmList}</ul>
      </div>
    );
  }
}

FilmList.propTypes = {};
FilmList.defaultProps = {};

export default FilmList;
