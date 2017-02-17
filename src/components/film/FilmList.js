import React, {
  Component,
} from 'react';
import FilmDetails from './FilmItem';
import AddModal from './FilmAddModal';

import {getAllFilms} from '../../API/apiFunctions';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFilmModal: false,
      films: []
    };

    this.update = this.update.bind(this);
    this._handleAddFilm = this._handleAddFilm.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
    this._sortByName = this._sortByName.bind(this);
  }

  update() {
    // getAllFilms();
  }

  _handleAddFilm() {
    this.setState({
      showAddFilmModal: true
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

  componentDidMount() {
    this.setState({
      films: getAllFilms()
    })
  }

  render() {
    const filmList = [];
    console.log('Log before push', this.state.films, filmList);
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
    console.log('Log after push', this.state.films, filmList);


    const containerStyles = {
      padding: 10,
      background: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=35515cff&noise=626262&density=38&opacity=70)',
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
          callBack={this.update}
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
