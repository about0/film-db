import React, {
  Component,
} from 'react';
import axios from 'axios';
import FilmDetails from './FilmDetails';

const REQ_URL = 'http://localhost:3333/api/films';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };

    this.update = this.update.bind(this);
  }

serverRequest() {
  const FILMS = [];
    axios.get(REQ_URL)
    .then(result => {
      result.data.forEach(film => {
        FILMS.push(film)
      });
      this.setState({
        films: FILMS
      });
      console.log(FILMS, FILMS.length);
    });
}

  update(){
    this.serverRequest();
  }

  componentDidMount() {
    this.serverRequest();
  }


  render() {
    const filmList = [];
    this.state.films.forEach(film => {
      filmList.push(
        <FilmDetails
          cover={film.cover_image}
          key={film._id}
          rating={film.rating}
          cast={film.cast}
          format={film.format}
          year={film.year}
          name={film.name}
          unId={film._id}
          callBack={this.update}
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

FilmList.propTypes = {
  cover_image: React.PropTypes.string,
  key: React.PropTypes.number,
  rating: React.PropTypes.string,
  cast: React.PropTypes.array,
  _id: React.PropTypes.string,
  update: React.PropTypes.func
};
FilmList.defaultProps = {};

export default FilmList;
