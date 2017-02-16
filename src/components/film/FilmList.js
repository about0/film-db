import React, {
  Component,
} from 'react';
import axios from 'axios';
import FilmDetails from './FilmItem';
import AddModal from './FilmAddModal';

const REQ_URL = 'http://localhost:3333/api/films';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      showAddFilmModal: false,
      sortOption: 'byDateAsc'
    };

    this.update = this.update.bind(this);
    this._handleAddFilm = this._handleAddFilm.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
    this._sortBy = this._sortBy.bind(this);
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
      });
  }

  update() {
    this.serverRequest();
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

  _sortBy() {
    let sortedFilms = [];
    if (this.state.sortOption === 'byDateAsc') {
      sortedFilms = this.state.films.sort(function (a, b) {
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    } else if (this.state.sortOption === 'byDateDesc') {
      sortedFilms = this.state.films.sort(function (a, b) {
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return a < b ? -1 : a > b ? 1 : 0;
      });
    } else if (this.state.sortOption === 'byNameAsc') {
      sortedFilms = this.state.films.sort(function (a, b) {
        a = new Date(a.name);
        b = new Date(b.name);
        return a < b ? -1 : a > b ? 1 : 0;
      });
    }
      console.log(sortedFilms);
    this.setState({
      films: sortedFilms
    })
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
          heigth={this.state.height}
        />)
    });

    const containerStyles = {
      padding: 10,
      background: 'url(http://api.thumbr.it/whitenoise-361x370.png?background=35515cff&noise=626262&density=38&opacity=70)',
      overflowY: 'hidden'
    };

    return (
      <div style={containerStyles} ref="filmList">
        <button
          style={{position: 'fixed'}}
          onClick={this._handleAddFilm}
        >Add Film
        </button>
        <ul>{filmList}</ul>
        <AddModal
          closeModal={this._handleCloseModal}
          showAddFilmModal={this.state.showAddFilmModal}
          callBack={this.update}
        />
        <button onClick={this._sortBy}>Sort</button>
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
