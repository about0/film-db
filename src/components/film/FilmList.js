import React, {
  Component,
} from 'react';
import FilmDetails from './FilmItem';
import AddModal from './FilmAddModal';

import request from 'request';
import {getAllFilms} from '../../API/apiFunctions';

const HOST = 'https://95.158.2.12:3333';


class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFilmModal: false,
      films: []
    };

    this._handleAddFilm = this._handleAddFilm.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
    this._sortByName = this._sortByName.bind(this);
    this.getAllFilms = this.getAllFilms.bind(this);
  }

  _handleAddFilm() {
    this.setState({
      showAddFilmModal: true
    })
  }

  getAllFilms() {
    const FILMS = [];
    request(`${HOST}/api/films`, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let parsedFilms = JSON.parse(body);
        console.log(parsedFilms);
        parsedFilms.forEach(film => {
          FILMS.push(film);
        });
        this.setState({
          films: FILMS
        })
      }
    })
  }


  _handleCloseModal() {
    this.setState({
      showAddFilmModal: false
    })
  }

  _sortByName() {
    const sortedFilms = this.state.films.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });
    this.setState({
      films: sortedFilms
    })
  }

  componentWillMount() {
    this.getAllFilms();
    console.log('Request inside ComponentWillMount');
  }

  render() {
    const filmList = [];
    console.log('Render function begin');
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
          callBack={this.getAllFilms}
        />)
    });


    const containerStyles = {
      padding: 10,
      backgroundColor: '#151B32',
      overflowY: 'hidden'
    };

    return (
      <div style={containerStyles} ref="filmList">
        <button
          onClick={this._handleAddFilm}
        >Add Film
        </button>
        <button onClick={this._sortByName}>Sort by Name</button>
        <ul>{filmList}</ul>
        <AddModal
          closeModal={this._handleCloseModal}
          showAddFilmModal={this.state.showAddFilmModal}
          callBack={this.getAllFilms}
        />
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
