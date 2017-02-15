import React, {propTypes} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import FilmList from './components/film/FilmList';
import App from './App';

class Dashboard extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FilmList}/>
        </Route>
      </Router>
    );
  }
}

Dashboard.propTypes = {

};
Dashboard.defaultProps = {};

export default Dashboard;
