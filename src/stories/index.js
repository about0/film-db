import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from './Welcome';
import FilmDetails from '../components/film/FilmList';
import DeleteFilmButton from '../components/shared/DeleteButton';
import InfoButton from '../components/shared/InfoButton';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('Basic button', () => (
    <Button value="Just a button"/>
  ))
  .add('Delete button', () => (
    <DeleteFilmButton />
  ))
.add('Info button', () => (
  <InfoButton />
));

storiesOf('Film Details', module)
  .add('Cover', () => (
    <FilmDetails />
  ));