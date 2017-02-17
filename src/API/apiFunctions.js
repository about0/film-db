import axios from 'axios';

const HOST = 'http://95.158.2.12:3333';

export function getAllFilms() {
  const FILMS = [];

  axios.get(`${HOST}/api/films`)
    .then(result => {
      result.data.forEach(film => {
        FILMS.push(film)
      });
    });
  return FILMS;
}