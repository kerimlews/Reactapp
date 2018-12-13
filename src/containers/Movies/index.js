import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moviesSelector } from './reselect';

class Movies extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div class="container">
      <div>
          <Search
            value={search}
            onChange={this.onChange}
          />
      </div>
      <div>
          { error && <Alert message={this.props.error} /> }
          { isLoading && <Spinner /> }
          <app-list
            :type="type"
            :isLoading="isLoadingMovies"
            :items="moviesData"
            :showDetails="showDetailsMovie"
          />
      </div>
    </div>
    );
  }
}

const mapDispatchToAction = (dispatch) => ({
  fetchMovies: ()
})

export default connect(moviesSelector(), mapDispatchToAction)(Movies);