import axios from 'axios';
import request from 'request';
import React from 'react';

const HOST = 'http://95.158.2.12:3333';



export function getAllFilms2() {
  axios.get(`${HOST}/api/films`)
    .then(result => {
      result.data.forEach(film => {
      });
    });
}


export const getAllFilms = () => {
  const FILMS = [];
  request(`${HOST}/api/films`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let parsedFilms = JSON.parse(body);
      parsedFilms.forEach(film => {
        FILMS.push(film);
        return FILMS;
      });
      console.log('Outside Function');
    }
  })
}