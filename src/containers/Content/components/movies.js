import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../../../components/Search';
import Spinner from '../../../components/Spinner';
import Alert from '../../../components/Alert';
import Card from '../../../components/Card';
import { makeSelectMovies } from '../reselect';
import { fetchMovies, searchMovies } from '../actions/movies';
import { showDetails } from '../../Details/actions';
import { toggleApp } from '../../App/actions';

class Movies extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    toggleApp: PropTypes.func.isRequired,
    searchMovies: PropTypes.func.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired,
    error: PropTypes.object
  }

  static defaultProps = {
    error: null
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  showDetails = (type, item) => {
    this.props.showDetails(type, item);
    this.props.toggleApp();
  }

  render() {
    const { isLoading, error, movies, searchMovies, fetchMovies } = this.props;

    return (
      <div className="container">
        <Search
          onFetch={fetchMovies}
          onSearch={searchMovies}

        />
        { error && <Alert message={error} /> }
        { isLoading && <Spinner /> }
        <div className="card-content">
          { movies.map((m) => (
            <Card
              onClick={this.showDetails}
              key={m.id}
              type="Movies"
              item={m}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToAction = (dispatch) => ({
  toggleApp: () => dispatch(toggleApp()),
  fetchMovies: () => dispatch(fetchMovies()),
  searchMovies: (search) => dispatch(searchMovies(search)),
  showDetails: (type, item) => dispatch(showDetails(type, item))
})

export default connect(makeSelectMovies(), mapDispatchToAction)(Movies);