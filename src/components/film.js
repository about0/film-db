import React, {
  Component,
  PropTypes,
} from 'react';
import Axios from 'axios';

class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: ''
    }
  }

  componentDidMount() {
    this.serverRequest = Axios.get('https://raw.githubusercontent.com/about0/film-db/master/src/data/dummyFilms.json')
      .then(result => {
        this.setState({
          cover: result.data[0].cover_image
        },
        console.log(result.data[0]))
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    return (
      <div>
        <img src={this.state.cover} alt=""/>
      </div>
    );
  }
}

FilmDetails.propTypes = {};
FilmDetails.defaultProps = {};

export default FilmDetails;
