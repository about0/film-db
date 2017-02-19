import React, {propTypes} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';

class Dashboard extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
}

Dashboard.propTypes = {

};
Dashboard.defaultProps = {};

export default Dashboard;
